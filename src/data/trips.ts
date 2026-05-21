import type { Trip, Pool, BranchId, Location } from './types';
import { participantsByPrefix } from './participants';

const skiAlpe = participantsByPrefix('A');
const ski2Alpes = participantsByPrefix('L');
const surfAlgarve = participantsByPrefix('S');
const surfHossegor = participantsByPrefix('H');
const schoolMBO = participantsByPrefix('M');
const corpASML = participantsByPrefix('C');

// Helper: filter ski participants by level
const skiByLevel = (cohort: typeof skiAlpe, level: string) =>
  cohort.filter((p) => p.level === level).map((p) => p.id);

// Pre-assign some, leave the rest unassigned for the drag&drop demo
const alpeGreen = skiByLevel(skiAlpe, 'green');
const alpeBlue = skiByLevel(skiAlpe, 'blue_bunnies');
const alpeRed = skiByLevel(skiAlpe, 'red_racoons');
const alpeBlack = skiByLevel(skiAlpe, 'black_bears');
const alpeYellow = skiByLevel(skiAlpe, 'yellow');

// Locations for the winter mega-trip
export const winterLocations: Location[] = [
  { id: 'loc-alpe', name: "Alpe d'Huez", shortName: "Alpe d'Huez", enrolled: 487, capacity: 520 },
  { id: 'loc-2alpes', name: 'Les 2 Alpes', shortName: 'Les 2 Alpes', enrolled: 392, capacity: 410 },
  { id: 'loc-tignes', name: 'Tignes', shortName: 'Tignes', enrolled: 58, capacity: 64 },
  { id: 'loc-valcenis', name: 'Val Cenis', shortName: 'Val Cenis', enrolled: 52, capacity: 60 },
];

export const pools: Pool[] = [
  // Alpe d'Huez krokus 2026 — clusters A-F. Demo subgroups within Green & Blue clusters.
  // Green cluster (cap 5/group)
  { id: 'pool-alpe-g1', tripId: 't-ski-krokus', name: 'Green Group A1', level: 'green', ageRange: [6, 8], capacity: 5, instructorId: 'i-maud', participantIds: alpeGreen.slice(0, 4), cluster: 'A', locationId: 'loc-alpe', meetingPoint: 'Bergstation L\'Eclose 09:30' },
  { id: 'pool-alpe-g2', tripId: 't-ski-krokus', name: 'Green Group A2', level: 'green', ageRange: [7, 9], capacity: 5, instructorId: 'i-jonas', participantIds: alpeGreen.slice(4, 8), cluster: 'A', locationId: 'loc-alpe', meetingPoint: 'Bergstation L\'Eclose 09:30' },
  { id: 'pool-alpe-g3', tripId: 't-ski-krokus', name: 'Green Group A3', level: 'green', ageRange: [8, 10], capacity: 5, instructorId: 'i-lars', participantIds: [], cluster: 'A', locationId: 'loc-alpe' },

  // Blue Bunnies cluster
  { id: 'pool-alpe-b1', tripId: 't-ski-krokus', name: 'Blue Bunnies B1', level: 'blue_bunnies', ageRange: [8, 10], capacity: 6, instructorId: 'i-lieke', participantIds: alpeBlue.slice(0, 5), cluster: 'B', locationId: 'loc-alpe', meetingPoint: 'Telecabine DMC 09:30' },
  { id: 'pool-alpe-b2', tripId: 't-ski-krokus', name: 'Blue Bunnies B2', level: 'blue_bunnies', ageRange: [9, 11], capacity: 6, instructorId: 'i-aniek', participantIds: alpeBlue.slice(5, 10), cluster: 'B', locationId: 'loc-alpe' },
  { id: 'pool-alpe-b3', tripId: 't-ski-krokus', name: 'Blue Bunnies B3', level: 'blue_bunnies', ageRange: [10, 12], capacity: 6, instructorId: undefined, participantIds: [], cluster: 'B', locationId: 'loc-alpe' },

  // Red Racoons cluster (the live-planning one — partially filled, monitor unassigned)
  { id: 'pool-alpe-r1', tripId: 't-ski-krokus', name: 'Red Racoons C1', level: 'red_racoons', ageRange: [10, 12], capacity: 7, instructorId: 'i-anne', participantIds: alpeRed.slice(0, 6), cluster: 'C', locationId: 'loc-alpe' },
  { id: 'pool-alpe-r2', tripId: 't-ski-krokus', name: 'Red Racoons C2', level: 'red_racoons', ageRange: [11, 13], capacity: 7, instructorId: undefined, participantIds: alpeRed.slice(6, 10), cluster: 'C', locationId: 'loc-alpe' },
  { id: 'pool-alpe-r3', tripId: 't-ski-krokus', name: 'Red Racoons C3', level: 'red_racoons', ageRange: [12, 14], capacity: 7, instructorId: undefined, participantIds: [], cluster: 'C', locationId: 'loc-alpe' },

  // Black Bears
  { id: 'pool-alpe-bk1', tripId: 't-ski-krokus', name: 'Black Bears D1', level: 'black_bears', ageRange: [12, 14], capacity: 8, instructorId: 'i-stefan', participantIds: alpeBlack.slice(0, 7), cluster: 'D', locationId: 'loc-alpe' },
  { id: 'pool-alpe-bk2', tripId: 't-ski-krokus', name: 'Black Bears D2', level: 'black_bears', ageRange: [13, 15], capacity: 8, instructorId: 'i-erik', participantIds: alpeBlack.slice(7, 13), cluster: 'D', locationId: 'loc-alpe' },

  // Yellow
  { id: 'pool-alpe-y1', tripId: 't-ski-krokus', name: 'Yellow Race E1', level: 'yellow', ageRange: [13, 16], capacity: 9, instructorId: 'i-erik', participantIds: alpeYellow.slice(0, 6), cluster: 'E', locationId: 'loc-alpe' },

  // Algarve Surf Camp - 4 pools
  { id: 'pool-alg-1', tripId: 't-surf-algarve', name: 'Sunrise Whitewater', level: 'beginner', ageRange: [16, 18], capacity: 8, instructorId: 'i-fenna', participantIds: surfAlgarve.filter(p => p.level === 'beginner').slice(0, 4).map(p => p.id), meetingPoint: 'Praia da Arrifana — strandpaal 2' },
  { id: 'pool-alg-2', tripId: 't-surf-algarve', name: 'Green Wave Crew', level: 'intermediate', ageRange: [16, 22], capacity: 8, instructorId: 'i-yara', participantIds: surfAlgarve.filter(p => p.level === 'intermediate').slice(0, 5).map(p => p.id), meetingPoint: 'Praia da Arrifana — strandpaal 4' },
  { id: 'pool-alg-3', tripId: 't-surf-algarve', name: 'Reef Hunters', level: 'advanced', ageRange: [17, 22], capacity: 6, instructorId: 'i-tomas', participantIds: surfAlgarve.filter(p => p.level === 'advanced').slice(0, 3).map(p => p.id), meetingPoint: 'Praia do Amado — noord' },
  { id: 'pool-alg-4', tripId: 't-surf-algarve', name: 'Punta Pro Squad', level: 'pro', ageRange: [18, 22], capacity: 4, instructorId: 'i-mila', participantIds: [], meetingPoint: 'Praia do Amado — punta' },

  // Hossegor
  { id: 'pool-hos-1', tripId: 't-surf-hossegor', name: 'Mini Riders', level: 'beginner', ageRange: [13, 14], capacity: 8, instructorId: 'i-noah', participantIds: surfHossegor.filter(p => p.age <= 14 && p.level === 'beginner').slice(0, 6).map(p => p.id) },
  { id: 'pool-hos-2', tripId: 't-surf-hossegor', name: 'Junior Whitewash', level: 'beginner', ageRange: [15, 17], capacity: 8, instructorId: 'i-fenna', participantIds: surfHossegor.filter(p => p.age >= 15 && p.level === 'beginner').slice(0, 6).map(p => p.id) },
  { id: 'pool-hos-3', tripId: 't-surf-hossegor', name: 'Teen Greens', level: 'intermediate', ageRange: [14, 17], capacity: 8, instructorId: 'i-yara', participantIds: surfHossegor.filter(p => p.level === 'intermediate').slice(0, 5).map(p => p.id) },
  { id: 'pool-hos-4', tripId: 't-surf-hossegor', name: 'Hossegor Chargers', level: 'advanced', ageRange: [15, 17], capacity: 4, instructorId: 'i-tomas', participantIds: surfHossegor.filter(p => p.level === 'advanced').map(p => p.id) },

  // MBO Ardennen
  { id: 'pool-mbo-1', tripId: 't-school-mbo', name: 'Klasgroep A — kano', level: 'beginner', ageRange: [15, 18], capacity: 10, instructorId: 'i-marit', participantIds: schoolMBO.slice(0, 8).map(p => p.id) },
  { id: 'pool-mbo-2', tripId: 't-school-mbo', name: 'Klasgroep B — mountainbike', level: 'intermediate', ageRange: [15, 18], capacity: 8, instructorId: 'i-pim', participantIds: schoolMBO.slice(8, 16).map(p => p.id) },
  { id: 'pool-mbo-3', tripId: 't-school-mbo', name: 'Klasgroep C — klimmen', level: 'advanced', ageRange: [15, 18], capacity: 8, instructorId: 'i-saar', participantIds: schoolMBO.slice(16, 24).map(p => p.id) },

  // ASML Corp
  { id: 'pool-asml-1', tripId: 't-corp-asml', name: 'Strategy Pod', level: 'beginner', ageRange: [24, 55], capacity: 6, instructorId: 'i-ravi', participantIds: corpASML.slice(0, 5).map(p => p.id) },
  { id: 'pool-asml-2', tripId: 't-corp-asml', name: 'Innovation Crew', level: 'intermediate', ageRange: [24, 55], capacity: 6, instructorId: 'i-eva', participantIds: corpASML.slice(5, 11).map(p => p.id) },
  { id: 'pool-asml-3', tripId: 't-corp-asml', name: 'Leadership Lineup', level: 'advanced', ageRange: [28, 55], capacity: 5, instructorId: 'i-noah', participantIds: corpASML.slice(11, 16).map(p => p.id) },
];

export const trips: Trip[] = [
  // SKI - featured
  {
    id: 't-ski-krokus',
    branchId: 'ski',
    title: 'Krokusvakantie 2026 — Skischool',
    destination: 'Multi-locatie Frankrijk',
    start: '2026-02-14',
    end: '2026-02-20',
    status: 'planned',
    capacity: 1054,
    enrolled: 989,
    coverGradientClass: 'gradient-ski',
    description: 'Mon-Fri skischool, 5 niveaus, 4 locaties. 522 deelnemers in Alpe d\'Huez en Les 2 Alpes, plus 110 op satellietlocaties.',
    basePrice: 749,
    poolIds: ['pool-alpe-g1','pool-alpe-g2','pool-alpe-g3','pool-alpe-b1','pool-alpe-b2','pool-alpe-b3','pool-alpe-r1','pool-alpe-r2','pool-alpe-r3','pool-alpe-bk1','pool-alpe-bk2','pool-alpe-y1'],
    locations: winterLocations,
    isFeatured: true,
  },
  {
    id: 't-ski-pasen',
    branchId: 'ski',
    title: 'Paasvakantie 2026 — Skischool',
    destination: 'Les 2 Alpes, Frankrijk',
    start: '2026-04-04',
    end: '2026-04-10',
    status: 'planned',
    capacity: 410,
    enrolled: 392,
    coverGradientClass: 'gradient-ski',
    description: 'Paaskamp voor 6-16 jarigen. 5 niveaus, max 9 per groep.',
    basePrice: 689,
    poolIds: [],
  },
  {
    id: 't-ski-school',
    branchId: 'ski',
    title: 'Schoolweek Solden',
    destination: 'Solden, Oostenrijk',
    start: '2026-01-17',
    end: '2026-01-24',
    status: 'closed',
    capacity: 40,
    enrolled: 40,
    coverGradientClass: 'gradient-ski',
    description: 'School-skireis voor twee bovenbouwklassen. Volledige indeling klaar.',
    basePrice: 695,
    poolIds: [],
  },

  // SURF
  {
    id: 't-surf-algarve',
    branchId: 'surf',
    title: 'Algarve Surf Camp 16+',
    destination: 'Aljezur, Portugal',
    start: '2026-07-04',
    end: '2026-07-13',
    status: 'planned',
    capacity: 32,
    enrolled: 26,
    coverGradientClass: 'gradient-surf',
    description: '10 dagen surfen, yoga en strandlife aan de Atlantische kust.',
    basePrice: 1095,
    poolIds: ['pool-alg-1', 'pool-alg-2', 'pool-alg-3', 'pool-alg-4'],
    isFeatured: true,
  },
  {
    id: 't-surf-hossegor',
    branchId: 'surf',
    title: 'Hossegor Wave Week 13+',
    destination: 'Hossegor, Frankrijk',
    start: '2026-08-08',
    end: '2026-08-15',
    status: 'planned',
    capacity: 28,
    enrolled: 22,
    coverGradientClass: 'gradient-surf',
    description: 'Klassieke FlowTrack camp voor 13-17 jarigen op een van Europa\'s beste beach breaks.',
    basePrice: 895,
    poolIds: ['pool-hos-1', 'pool-hos-2', 'pool-hos-3', 'pool-hos-4'],
  },
  {
    id: 't-surf-family',
    branchId: 'surf',
    title: 'Familie Surf Weekend',
    destination: 'Domburg, Nederland',
    start: '2026-09-12',
    end: '2026-09-14',
    status: 'planned',
    capacity: 24,
    enrolled: 8,
    coverGradientClass: 'gradient-surf',
    description: 'Kort weekend voor gezinnen, gemengde leeftijden, focus op fun.',
    basePrice: 295,
    poolIds: [],
  },

  // SCHOOL
  {
    id: 't-school-mbo',
    branchId: 'school',
    title: 'MBO Mendelcollege Ardennen',
    destination: 'La Roche, Belgie',
    start: '2026-05-25',
    end: '2026-05-29',
    status: 'planned',
    capacity: 28,
    enrolled: 24,
    coverGradientClass: 'gradient-school',
    description: 'Outdoor-week voor 4 klassen MBO Sport & Bewegen.',
    basePrice: 425,
    poolIds: ['pool-mbo-1', 'pool-mbo-2', 'pool-mbo-3'],
    isFeatured: true,
  },
  {
    id: 't-school-vwo',
    branchId: 'school',
    title: 'VWO Stedelijk Outdoor Texel',
    destination: 'Texel, Nederland',
    start: '2026-06-15',
    end: '2026-06-18',
    status: 'planned',
    capacity: 32,
    enrolled: 0,
    coverGradientClass: 'gradient-school',
    description: 'Vier dagen op het eiland: kitesurfen, fietstocht en strandexpeditie.',
    basePrice: 385,
    poolIds: [],
  },

  // CORPORATE
  {
    id: 't-corp-asml',
    branchId: 'corporate',
    title: 'ASML Surf & Strategy',
    destination: 'Zandvoort, Nederland',
    start: '2026-06-04',
    end: '2026-06-06',
    status: 'planned',
    capacity: 18,
    enrolled: 16,
    coverGradientClass: 'gradient-corp',
    description: 'Driedaagse offsite met surfles, leadership-sessies en diner in de duinen.',
    basePrice: 1450,
    poolIds: ['pool-asml-1', 'pool-asml-2', 'pool-asml-3'],
    isFeatured: true,
  },
  {
    id: 't-corp-abn',
    branchId: 'corporate',
    title: 'ABN AMRO Teamday',
    destination: 'Bergen aan Zee, Nederland',
    start: '2026-06-21',
    end: '2026-06-21',
    status: 'planned',
    capacity: 24,
    enrolled: 0,
    coverGradientClass: 'gradient-corp',
    description: 'Eendaags teambuilding event aan zee met SUP en beach challenge.',
    basePrice: 185,
    poolIds: [],
  },
];

export function tripsForBranch(branchId: BranchId) {
  return trips.filter((t) => t.branchId === branchId);
}
export function getTrip(id: string) {
  return trips.find((t) => t.id === id);
}
export function poolsForTrip(tripId: string) {
  return pools.filter((p) => p.tripId === tripId);
}
export function getPool(id: string) {
  return pools.find((p) => p.id === id);
}
export function featuredTripForBranch(branchId: BranchId) {
  return trips.find((t) => t.branchId === branchId && t.isFeatured);
}
