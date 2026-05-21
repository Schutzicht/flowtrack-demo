const firstNames = [
  "Sem",
  "Liv",
  "Noor",
  "Daan",
  "Mila",
  "Luuk",
  "Saar",
  "Finn",
  "Tess",
  "Boaz",
  "Evi",
  "Jurre",
  "Lotte",
  "Tim",
  "Anna",
  "Pepijn",
  "Nina",
  "Sven",
  "Sophie",
  "Joep",
  "Lize",
  "Mees",
  "Eline",
  "Stijn",
  "Fleur",
  "Ruben",
  "Hannah",
  "Hugo",
  "Maud",
  "Jens",
  "Floor",
  "Jip",
  "Lara",
  "Olivier",
  "Veerle",
  "Sam",
  "Roos",
  "Mats",
  "Julia",
  "Bram",
  "Esmee",
  "Thijs",
  "Janna",
  "Wessel",
  "Aniek",
  "Cas",
  "Lynn",
  "Quinten",
  "Norah",
  "Senna",
  "Mia",
  "Lina",
  "Yara",
  "Robin",
  "Niels",
  "Lotte",
  "Pien",
  "Kai",
  "Levi",
  "Zoe"
];
const lastNames = [
  "Jansen",
  "de Vries",
  "van Dijk",
  "Bakker",
  "Visser",
  "Smit",
  "Meijer",
  "de Boer",
  "Mulder",
  "de Groot",
  "Bos",
  "Vos",
  "Peters",
  "Hendriks",
  "van Leeuwen",
  "Dekker",
  "Brouwer",
  "de Wit",
  "Dijkstra",
  "Smits",
  "de Graaf",
  "van der Berg",
  "van Beek",
  "Kuipers",
  "van der Meer",
  "Hoekstra",
  "Maas",
  "Verhoeven",
  "Koster",
  "Prins",
  "Janssens",
  "Peeters",
  "Maes",
  "Wouters",
  "Claes",
  "Aerts",
  "Cools",
  "Goossens"
];
function pseudoRandom(seed) {
  const x = Math.sin(seed) * 1e4;
  return x - Math.floor(x);
}
function pick(arr, seed) {
  return arr[Math.floor(pseudoRandom(seed) * arr.length)];
}
const allergyPool = ["noten", "lactose", "gluten", "schaaldieren", "pinda", "soja"];
const medicalNotePool = [
  "Astma — inhaler bij zich",
  "Type 1 diabetes — insuline-pomp",
  "Knieblessure 2024, geen sprongen",
  "Epilepsie, stabiel met medicatie",
  "Hooikoorts in piekweken"
];
function makeInitials(name) {
  const parts = name.split(" ");
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}
function generateParticipant(seed, ageRange, levelDist, opts) {
  const first = pick(firstNames, seed);
  const last = pick(lastNames, seed + 7);
  const age = Math.floor(pseudoRandom(seed + 13) * (ageRange[1] - ageRange[0] + 1)) + ageRange[0];
  const r = pseudoRandom(seed + 21);
  let cum = 0;
  let level = Object.keys(levelDist)[0];
  for (const [lv, p] of Object.entries(levelDist)) {
    cum += p ?? 0;
    if (r <= cum) {
      level = lv;
      break;
    }
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
    notes: pseudoRandom(seed + 51) < 0.12 ? "Eerder bij FlowTrack geweest" : void 0,
    medical: hasMedical || hasAllergy ? {
      allergies: hasAllergy ? [pick(allergyPool, seed + 61)] : void 0,
      notes: hasMedical ? pick(medicalNotePool, seed + 71) : void 0,
      insurance: "EHIC + reisverzekering"
    } : void 0,
    emergencyContact: {
      name: `${pick(firstNames, seed + 81)} ${last}`,
      phone: `06-${1e7 + Math.floor(pseudoRandom(seed + 91) * 89999999)}`
    },
    locationId: opts?.locationId,
    assignedPoolId: null
  };
}
function makeCohort(prefix, count, ageRange, levelDist, opts) {
  return Array.from(
    { length: count },
    (_, i) => generateParticipant(prefix.charCodeAt(0) * 1e3 + i, ageRange, levelDist, opts)
  );
}
function addPreferences(cohort) {
  cohort.forEach((p, idx) => {
    if (pseudoRandom(idx + 100) < 0.32) {
      const candidates = cohort.filter(
        (o) => o.id !== p.id && Math.abs(o.age - p.age) <= 1
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
const skiAlpe$1 = addPreferences(
  makeCohort("A", 64, [6, 16], {
    green: 0.18,
    blue_bunnies: 0.25,
    red_racoons: 0.28,
    black_bears: 0.2,
    yellow: 0.09
  }, { locationId: "loc-alpe" })
);
const ski2Alpes = addPreferences(
  makeCohort("L", 38, [7, 16], {
    green: 0.22,
    blue_bunnies: 0.28,
    red_racoons: 0.25,
    black_bears: 0.18,
    yellow: 0.07
  }, { locationId: "loc-2alpes" })
);
const surfAlgarve$1 = addPreferences(
  makeCohort("S", 26, [16, 22], {
    beginner: 0.35,
    intermediate: 0.4,
    advanced: 0.2,
    pro: 0.05
  })
);
const surfHossegor$1 = makeCohort("H", 22, [13, 17], {
  beginner: 0.55,
  intermediate: 0.3,
  advanced: 0.13,
  pro: 0.02
});
const schoolMBO$1 = makeCohort("M", 24, [15, 18], {
  beginner: 0.6,
  intermediate: 0.3,
  advanced: 0.1
});
const corpASML$1 = makeCohort("C", 16, [24, 55], {
  beginner: 0.55,
  intermediate: 0.3,
  advanced: 0.13,
  pro: 0.02
});
const participants = [
  ...skiAlpe$1,
  ...ski2Alpes,
  ...surfAlgarve$1,
  ...surfHossegor$1,
  ...schoolMBO$1,
  ...corpASML$1
];
function participantsByPrefix(prefix) {
  const code = prefix.charCodeAt(0);
  return participants.filter((p) => {
    const n = parseInt(p.id.slice(2), 10);
    return n >= code * 1e3 && n < (code + 1) * 1e3;
  });
}

const skiAlpe = participantsByPrefix("A");
participantsByPrefix("L");
const surfAlgarve = participantsByPrefix("S");
const surfHossegor = participantsByPrefix("H");
const schoolMBO = participantsByPrefix("M");
const corpASML = participantsByPrefix("C");
const skiByLevel = (cohort, level) => cohort.filter((p) => p.level === level).map((p) => p.id);
const alpeGreen = skiByLevel(skiAlpe, "green");
const alpeBlue = skiByLevel(skiAlpe, "blue_bunnies");
const alpeRed = skiByLevel(skiAlpe, "red_racoons");
const alpeBlack = skiByLevel(skiAlpe, "black_bears");
const alpeYellow = skiByLevel(skiAlpe, "yellow");
const winterLocations = [
  { id: "loc-alpe", name: "Alpe d'Huez", shortName: "Alpe d'Huez", enrolled: 487, capacity: 520 },
  { id: "loc-2alpes", name: "Les 2 Alpes", shortName: "Les 2 Alpes", enrolled: 392, capacity: 410 },
  { id: "loc-tignes", name: "Tignes", shortName: "Tignes", enrolled: 58, capacity: 64 },
  { id: "loc-valcenis", name: "Val Cenis", shortName: "Val Cenis", enrolled: 52, capacity: 60 }
];
const pools = [
  // Alpe d'Huez krokus 2026 — clusters A-F. Demo subgroups within Green & Blue clusters.
  // Green cluster (cap 5/group)
  { id: "pool-alpe-g1", tripId: "t-ski-krokus", name: "Green Group A1", level: "green", ageRange: [6, 8], capacity: 5, instructorId: "i-maud", participantIds: alpeGreen.slice(0, 4), cluster: "A", locationId: "loc-alpe", meetingPoint: "Bergstation L'Eclose 09:30" },
  { id: "pool-alpe-g2", tripId: "t-ski-krokus", name: "Green Group A2", level: "green", ageRange: [7, 9], capacity: 5, instructorId: "i-jonas", participantIds: alpeGreen.slice(4, 8), cluster: "A", locationId: "loc-alpe", meetingPoint: "Bergstation L'Eclose 09:30" },
  { id: "pool-alpe-g3", tripId: "t-ski-krokus", name: "Green Group A3", level: "green", ageRange: [8, 10], capacity: 5, instructorId: "i-lars", participantIds: [], cluster: "A", locationId: "loc-alpe" },
  // Blue Bunnies cluster
  { id: "pool-alpe-b1", tripId: "t-ski-krokus", name: "Blue Bunnies B1", level: "blue_bunnies", ageRange: [8, 10], capacity: 6, instructorId: "i-lieke", participantIds: alpeBlue.slice(0, 5), cluster: "B", locationId: "loc-alpe", meetingPoint: "Telecabine DMC 09:30" },
  { id: "pool-alpe-b2", tripId: "t-ski-krokus", name: "Blue Bunnies B2", level: "blue_bunnies", ageRange: [9, 11], capacity: 6, instructorId: "i-aniek", participantIds: alpeBlue.slice(5, 10), cluster: "B", locationId: "loc-alpe" },
  { id: "pool-alpe-b3", tripId: "t-ski-krokus", name: "Blue Bunnies B3", level: "blue_bunnies", ageRange: [10, 12], capacity: 6, instructorId: void 0, participantIds: [], cluster: "B", locationId: "loc-alpe" },
  // Red Racoons cluster (the live-planning one — partially filled, monitor unassigned)
  { id: "pool-alpe-r1", tripId: "t-ski-krokus", name: "Red Racoons C1", level: "red_racoons", ageRange: [10, 12], capacity: 7, instructorId: "i-anne", participantIds: alpeRed.slice(0, 6), cluster: "C", locationId: "loc-alpe" },
  { id: "pool-alpe-r2", tripId: "t-ski-krokus", name: "Red Racoons C2", level: "red_racoons", ageRange: [11, 13], capacity: 7, instructorId: void 0, participantIds: alpeRed.slice(6, 10), cluster: "C", locationId: "loc-alpe" },
  { id: "pool-alpe-r3", tripId: "t-ski-krokus", name: "Red Racoons C3", level: "red_racoons", ageRange: [12, 14], capacity: 7, instructorId: void 0, participantIds: [], cluster: "C", locationId: "loc-alpe" },
  // Black Bears
  { id: "pool-alpe-bk1", tripId: "t-ski-krokus", name: "Black Bears D1", level: "black_bears", ageRange: [12, 14], capacity: 8, instructorId: "i-stefan", participantIds: alpeBlack.slice(0, 7), cluster: "D", locationId: "loc-alpe" },
  { id: "pool-alpe-bk2", tripId: "t-ski-krokus", name: "Black Bears D2", level: "black_bears", ageRange: [13, 15], capacity: 8, instructorId: "i-erik", participantIds: alpeBlack.slice(7, 13), cluster: "D", locationId: "loc-alpe" },
  // Yellow
  { id: "pool-alpe-y1", tripId: "t-ski-krokus", name: "Yellow Race E1", level: "yellow", ageRange: [13, 16], capacity: 9, instructorId: "i-erik", participantIds: alpeYellow.slice(0, 6), cluster: "E", locationId: "loc-alpe" },
  // Algarve Surf Camp - 4 pools
  { id: "pool-alg-1", tripId: "t-surf-algarve", name: "Sunrise Whitewater", level: "beginner", ageRange: [16, 18], capacity: 8, instructorId: "i-fenna", participantIds: surfAlgarve.filter((p) => p.level === "beginner").slice(0, 4).map((p) => p.id), meetingPoint: "Praia da Arrifana — strandpaal 2" },
  { id: "pool-alg-2", tripId: "t-surf-algarve", name: "Green Wave Crew", level: "intermediate", ageRange: [16, 22], capacity: 8, instructorId: "i-yara", participantIds: surfAlgarve.filter((p) => p.level === "intermediate").slice(0, 5).map((p) => p.id), meetingPoint: "Praia da Arrifana — strandpaal 4" },
  { id: "pool-alg-3", tripId: "t-surf-algarve", name: "Reef Hunters", level: "advanced", ageRange: [17, 22], capacity: 6, instructorId: "i-tomas", participantIds: surfAlgarve.filter((p) => p.level === "advanced").slice(0, 3).map((p) => p.id), meetingPoint: "Praia do Amado — noord" },
  { id: "pool-alg-4", tripId: "t-surf-algarve", name: "Punta Pro Squad", level: "pro", ageRange: [18, 22], capacity: 4, instructorId: "i-mila", participantIds: [], meetingPoint: "Praia do Amado — punta" },
  // Hossegor
  { id: "pool-hos-1", tripId: "t-surf-hossegor", name: "Mini Riders", level: "beginner", ageRange: [13, 14], capacity: 8, instructorId: "i-noah", participantIds: surfHossegor.filter((p) => p.age <= 14 && p.level === "beginner").slice(0, 6).map((p) => p.id) },
  { id: "pool-hos-2", tripId: "t-surf-hossegor", name: "Junior Whitewash", level: "beginner", ageRange: [15, 17], capacity: 8, instructorId: "i-fenna", participantIds: surfHossegor.filter((p) => p.age >= 15 && p.level === "beginner").slice(0, 6).map((p) => p.id) },
  { id: "pool-hos-3", tripId: "t-surf-hossegor", name: "Teen Greens", level: "intermediate", ageRange: [14, 17], capacity: 8, instructorId: "i-yara", participantIds: surfHossegor.filter((p) => p.level === "intermediate").slice(0, 5).map((p) => p.id) },
  { id: "pool-hos-4", tripId: "t-surf-hossegor", name: "Hossegor Chargers", level: "advanced", ageRange: [15, 17], capacity: 4, instructorId: "i-tomas", participantIds: surfHossegor.filter((p) => p.level === "advanced").map((p) => p.id) },
  // MBO Ardennen
  { id: "pool-mbo-1", tripId: "t-school-mbo", name: "Klasgroep A — kano", level: "beginner", ageRange: [15, 18], capacity: 10, instructorId: "i-marit", participantIds: schoolMBO.slice(0, 8).map((p) => p.id) },
  { id: "pool-mbo-2", tripId: "t-school-mbo", name: "Klasgroep B — mountainbike", level: "intermediate", ageRange: [15, 18], capacity: 8, instructorId: "i-pim", participantIds: schoolMBO.slice(8, 16).map((p) => p.id) },
  { id: "pool-mbo-3", tripId: "t-school-mbo", name: "Klasgroep C — klimmen", level: "advanced", ageRange: [15, 18], capacity: 8, instructorId: "i-saar", participantIds: schoolMBO.slice(16, 24).map((p) => p.id) },
  // ASML Corp
  { id: "pool-asml-1", tripId: "t-corp-asml", name: "Strategy Pod", level: "beginner", ageRange: [24, 55], capacity: 6, instructorId: "i-ravi", participantIds: corpASML.slice(0, 5).map((p) => p.id) },
  { id: "pool-asml-2", tripId: "t-corp-asml", name: "Innovation Crew", level: "intermediate", ageRange: [24, 55], capacity: 6, instructorId: "i-eva", participantIds: corpASML.slice(5, 11).map((p) => p.id) },
  { id: "pool-asml-3", tripId: "t-corp-asml", name: "Leadership Lineup", level: "advanced", ageRange: [28, 55], capacity: 5, instructorId: "i-noah", participantIds: corpASML.slice(11, 16).map((p) => p.id) }
];
const trips = [
  // SKI - featured
  {
    id: "t-ski-krokus",
    branchId: "ski",
    title: "Krokusvakantie 2026 — Skischool",
    destination: "Multi-locatie Frankrijk",
    start: "2026-02-14",
    end: "2026-02-20",
    status: "planned",
    capacity: 1054,
    enrolled: 989,
    coverGradientClass: "gradient-ski",
    description: "Mon-Fri skischool, 5 niveaus, 4 locaties. 522 deelnemers in Alpe d'Huez en Les 2 Alpes, plus 110 op satellietlocaties.",
    basePrice: 749,
    poolIds: ["pool-alpe-g1", "pool-alpe-g2", "pool-alpe-g3", "pool-alpe-b1", "pool-alpe-b2", "pool-alpe-b3", "pool-alpe-r1", "pool-alpe-r2", "pool-alpe-r3", "pool-alpe-bk1", "pool-alpe-bk2", "pool-alpe-y1"],
    locations: winterLocations,
    isFeatured: true
  },
  {
    id: "t-ski-pasen",
    branchId: "ski",
    title: "Paasvakantie 2026 — Skischool",
    destination: "Les 2 Alpes, Frankrijk",
    start: "2026-04-04",
    end: "2026-04-10",
    status: "planned",
    capacity: 410,
    enrolled: 392,
    coverGradientClass: "gradient-ski",
    description: "Paaskamp voor 6-16 jarigen. 5 niveaus, max 9 per groep.",
    basePrice: 689,
    poolIds: []
  },
  {
    id: "t-ski-school",
    branchId: "ski",
    title: "Schoolweek Solden",
    destination: "Solden, Oostenrijk",
    start: "2026-01-17",
    end: "2026-01-24",
    status: "closed",
    capacity: 40,
    enrolled: 40,
    coverGradientClass: "gradient-ski",
    description: "School-skireis voor twee bovenbouwklassen. Volledige indeling klaar.",
    basePrice: 695,
    poolIds: []
  },
  // SURF
  {
    id: "t-surf-algarve",
    branchId: "surf",
    title: "Algarve Surf Camp 16+",
    destination: "Aljezur, Portugal",
    start: "2026-07-04",
    end: "2026-07-13",
    status: "planned",
    capacity: 32,
    enrolled: 26,
    coverGradientClass: "gradient-surf",
    description: "10 dagen surfen, yoga en strandlife aan de Atlantische kust.",
    basePrice: 1095,
    poolIds: ["pool-alg-1", "pool-alg-2", "pool-alg-3", "pool-alg-4"],
    isFeatured: true
  },
  {
    id: "t-surf-hossegor",
    branchId: "surf",
    title: "Hossegor Wave Week 13+",
    destination: "Hossegor, Frankrijk",
    start: "2026-08-08",
    end: "2026-08-15",
    status: "planned",
    capacity: 28,
    enrolled: 22,
    coverGradientClass: "gradient-surf",
    description: "Klassieke FlowTrack camp voor 13-17 jarigen op een van Europa's beste beach breaks.",
    basePrice: 895,
    poolIds: ["pool-hos-1", "pool-hos-2", "pool-hos-3", "pool-hos-4"]
  },
  {
    id: "t-surf-family",
    branchId: "surf",
    title: "Familie Surf Weekend",
    destination: "Domburg, Nederland",
    start: "2026-09-12",
    end: "2026-09-14",
    status: "planned",
    capacity: 24,
    enrolled: 8,
    coverGradientClass: "gradient-surf",
    description: "Kort weekend voor gezinnen, gemengde leeftijden, focus op fun.",
    basePrice: 295,
    poolIds: []
  },
  // SCHOOL
  {
    id: "t-school-mbo",
    branchId: "school",
    title: "MBO Mendelcollege Ardennen",
    destination: "La Roche, Belgie",
    start: "2026-05-25",
    end: "2026-05-29",
    status: "planned",
    capacity: 28,
    enrolled: 24,
    coverGradientClass: "gradient-school",
    description: "Outdoor-week voor 4 klassen MBO Sport & Bewegen.",
    basePrice: 425,
    poolIds: ["pool-mbo-1", "pool-mbo-2", "pool-mbo-3"],
    isFeatured: true
  },
  {
    id: "t-school-vwo",
    branchId: "school",
    title: "VWO Stedelijk Outdoor Texel",
    destination: "Texel, Nederland",
    start: "2026-06-15",
    end: "2026-06-18",
    status: "planned",
    capacity: 32,
    enrolled: 0,
    coverGradientClass: "gradient-school",
    description: "Vier dagen op het eiland: kitesurfen, fietstocht en strandexpeditie.",
    basePrice: 385,
    poolIds: []
  },
  // CORPORATE
  {
    id: "t-corp-asml",
    branchId: "corporate",
    title: "ASML Surf & Strategy",
    destination: "Zandvoort, Nederland",
    start: "2026-06-04",
    end: "2026-06-06",
    status: "planned",
    capacity: 18,
    enrolled: 16,
    coverGradientClass: "gradient-corp",
    description: "Driedaagse offsite met surfles, leadership-sessies en diner in de duinen.",
    basePrice: 1450,
    poolIds: ["pool-asml-1", "pool-asml-2", "pool-asml-3"],
    isFeatured: true
  },
  {
    id: "t-corp-abn",
    branchId: "corporate",
    title: "ABN AMRO Teamday",
    destination: "Bergen aan Zee, Nederland",
    start: "2026-06-21",
    end: "2026-06-21",
    status: "planned",
    capacity: 24,
    enrolled: 0,
    coverGradientClass: "gradient-corp",
    description: "Eendaags teambuilding event aan zee met SUP en beach challenge.",
    basePrice: 185,
    poolIds: []
  }
];
function tripsForBranch(branchId) {
  return trips.filter((t) => t.branchId === branchId);
}
function getTrip(id) {
  return trips.find((t) => t.id === id);
}
function poolsForTrip(tripId) {
  return pools.filter((p) => p.tripId === tripId);
}
function featuredTripForBranch(branchId) {
  return trips.find((t) => t.branchId === branchId && t.isFeatured);
}

export { poolsForTrip as a, featuredTripForBranch as f, getTrip as g, participantsByPrefix as p, tripsForBranch as t, winterLocations as w };
