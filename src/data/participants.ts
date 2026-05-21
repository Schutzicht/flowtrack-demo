import type { Participant, Level } from './types';

const firstNames = [
  'Sem', 'Liv', 'Noor', 'Daan', 'Mila', 'Luuk', 'Saar', 'Finn', 'Tess', 'Boaz',
  'Evi', 'Jurre', 'Lotte', 'Tim', 'Anna', 'Pepijn', 'Nina', 'Sven', 'Sophie', 'Joep',
  'Lize', 'Mees', 'Eline', 'Stijn', 'Fleur', 'Ruben', 'Hannah', 'Hugo', 'Maud', 'Jens',
  'Floor', 'Jip', 'Lara', 'Olivier', 'Veerle', 'Sam', 'Roos', 'Mats', 'Julia', 'Bram',
  'Esmee', 'Thijs', 'Janna', 'Wessel', 'Aniek', 'Cas', 'Lynn', 'Quinten', 'Norah', 'Senna',
  'Mia', 'Lina', 'Yara', 'Robin', 'Niels', 'Lotte', 'Pien', 'Kai', 'Levi', 'Zoe',
];
const lastNames = [
  'Jansen', 'de Vries', 'van Dijk', 'Bakker', 'Visser', 'Smit', 'Meijer', 'de Boer',
  'Mulder', 'de Groot', 'Bos', 'Vos', 'Peters', 'Hendriks', 'van Leeuwen', 'Dekker',
  'Brouwer', 'de Wit', 'Dijkstra', 'Smits', 'de Graaf', 'van der Berg', 'van Beek',
  'Kuipers', 'van der Meer', 'Hoekstra', 'Maas', 'Verhoeven', 'Koster', 'Prins',
  'Janssens', 'Peeters', 'Maes', 'Wouters', 'Claes', 'Aerts', 'Cools', 'Goossens',
];

function pseudoRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}
function pick<T>(arr: T[], seed: number): T {
  return arr[Math.floor(pseudoRandom(seed) * arr.length)];
}

const allergyPool = ['noten', 'lactose', 'gluten', 'schaaldieren', 'pinda', 'soja'];
const medicalNotePool = [
  'Astma — inhaler bij zich',
  'Type 1 diabetes — insuline-pomp',
  'Knieblessure 2024, geen sprongen',
  'Epilepsie, stabiel met medicatie',
  'Hooikoorts in piekweken',
];

function makeInitials(name: string) {
  const parts = name.split(' ');
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

function generateParticipant(
  seed: number,
  ageRange: [number, number],
  levelDist: Partial<Record<Level, number>>,
  opts?: { locationId?: string },
): Participant {
  const first = pick(firstNames, seed);
  const last = pick(lastNames, seed + 7);
  const age = Math.floor(pseudoRandom(seed + 13) * (ageRange[1] - ageRange[0] + 1)) + ageRange[0];
  const r = pseudoRandom(seed + 21);
  let cum = 0;
  let level: Level = Object.keys(levelDist)[0] as Level;
  for (const [lv, p] of Object.entries(levelDist)) {
    cum += p ?? 0;
    if (r <= cum) { level = lv as Level; break; }
  }
  const name = `${first} ${last}`;
  const hasMedical = pseudoRandom(seed + 33) < 0.22;
  const hasAllergy = pseudoRandom(seed + 41) < 0.16;
  return {
    id: `p-${seed}`,
    name,
    initials: makeInitials(name),
    age,
    level,
    notes: pseudoRandom(seed + 51) < 0.12 ? 'Eerder bij FlowTrack geweest' : undefined,
    medical: hasMedical || hasAllergy ? {
      allergies: hasAllergy ? [pick(allergyPool, seed + 61)] : undefined,
      notes: hasMedical ? pick(medicalNotePool, seed + 71) : undefined,
      insurance: 'EHIC + reisverzekering',
    } : undefined,
    emergencyContact: {
      name: `${pick(firstNames, seed + 81)} ${last}`,
      phone: `06-${10000000 + Math.floor(pseudoRandom(seed + 91) * 89999999)}`,
    },
    locationId: opts?.locationId,
    assignedPoolId: null,
  };
}

function makeCohort(
  prefix: string,
  count: number,
  ageRange: [number, number],
  levelDist: Partial<Record<Level, number>>,
  opts?: { locationId?: string },
) {
  return Array.from({ length: count }, (_, i) =>
    generateParticipant(prefix.charCodeAt(0) * 1000 + i, ageRange, levelDist, opts),
  );
}

function addPreferences(cohort: Participant[]) {
  // For ~30% of participants, add 1-2 preferences (names of others in cohort with similar age)
  cohort.forEach((p, idx) => {
    if (pseudoRandom(idx + 100) < 0.32) {
      const candidates = cohort.filter(
        (o) => o.id !== p.id && Math.abs(o.age - p.age) <= 1,
      );
      if (candidates.length > 0) {
        const friend = candidates[Math.floor(pseudoRandom(idx + 200) * candidates.length)];
        p.preferences = [friend.name];
        if (pseudoRandom(idx + 300) < 0.3 && candidates.length > 1) {
          const friend2 = candidates[Math.floor(pseudoRandom(idx + 400) * candidates.length)];
          if (friend2.id !== friend.id) p.preferences.push(friend2.name);
        }
      }
    }
  });
  return cohort;
}

// Ski Alpe d'Huez - krokus 2026 (the demo hero cohort)
const skiAlpe = addPreferences(
  makeCohort('A', 64, [6, 16], {
    green: 0.18,
    blue_bunnies: 0.25,
    red_racoons: 0.28,
    black_bears: 0.2,
    yellow: 0.09,
  }, { locationId: 'loc-alpe' }),
);

// Ski Les 2 Alpes - paas vakantie
const ski2Alpes = addPreferences(
  makeCohort('L', 38, [7, 16], {
    green: 0.22,
    blue_bunnies: 0.28,
    red_racoons: 0.25,
    black_bears: 0.18,
    yellow: 0.07,
  }, { locationId: 'loc-2alpes' }),
);

// Surf Algarve 16+
const surfAlgarve = addPreferences(
  makeCohort('S', 26, [16, 22], {
    beginner: 0.35,
    intermediate: 0.4,
    advanced: 0.2,
    pro: 0.05,
  }),
);

// Surf Hossegor 13+
const surfHossegor = makeCohort('H', 22, [13, 17], {
  beginner: 0.55,
  intermediate: 0.3,
  advanced: 0.13,
  pro: 0.02,
});

// School MBO Ardennen
const schoolMBO = makeCohort('M', 24, [15, 18], {
  beginner: 0.6,
  intermediate: 0.3,
  advanced: 0.1,
});

// Corporate ASML
const corpASML = makeCohort('C', 16, [24, 55], {
  beginner: 0.55,
  intermediate: 0.3,
  advanced: 0.13,
  pro: 0.02,
});

export const participants: Participant[] = [
  ...skiAlpe,
  ...ski2Alpes,
  ...surfAlgarve,
  ...surfHossegor,
  ...schoolMBO,
  ...corpASML,
];

export function getParticipant(id: string) {
  return participants.find((p) => p.id === id);
}

export function participantsByPrefix(prefix: string) {
  const code = prefix.charCodeAt(0);
  return participants.filter((p) => {
    const n = parseInt(p.id.slice(2), 10);
    return n >= code * 1000 && n < (code + 1) * 1000;
  });
}
