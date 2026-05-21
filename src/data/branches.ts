import type { Branch, LevelDef, Role } from './types';

const surfLevels: LevelDef[] = [
  { id: 'beginner', label: 'Beginner', shortLabel: 'Beg', swatch: '#4FB3A9', cap: 8, order: 1 },
  { id: 'intermediate', label: 'Intermediate', shortLabel: 'Int', swatch: '#2F6EA8', cap: 8, order: 2 },
  { id: 'advanced', label: 'Advanced', shortLabel: 'Adv', swatch: '#6E3FB3', cap: 6, order: 3 },
  { id: 'pro', label: 'Pro', shortLabel: 'Pro', swatch: '#B33F7F', cap: 4, order: 4 },
];

const skiLevels: LevelDef[] = [
  { id: 'green', label: 'Green', shortLabel: 'G', swatch: '#3FA661', cap: 5, order: 1 },
  { id: 'blue_bunnies', label: 'Blue Bunnies', shortLabel: 'BB', swatch: '#3B8FE2', cap: 6, order: 2 },
  { id: 'red_racoons', label: 'Red Racoons', shortLabel: 'RR', swatch: '#D94C4C', cap: 7, order: 3 },
  { id: 'black_bears', label: 'Black Bears', shortLabel: 'BLK', swatch: '#1A1A1A', cap: 8, order: 4 },
  { id: 'yellow', label: 'Yellow', shortLabel: 'Y', swatch: '#E0A91A', cap: 9, order: 5 },
];

const schoolLevels: LevelDef[] = [
  { id: 'beginner', label: 'Starter', shortLabel: 'S', swatch: '#4FB3A9', cap: 10, order: 1 },
  { id: 'intermediate', label: 'Gevorderd', shortLabel: 'G', swatch: '#2F6EA8', cap: 10, order: 2 },
  { id: 'advanced', label: 'Sport-stream', shortLabel: 'Sp', swatch: '#6E3FB3', cap: 8, order: 3 },
];

const corpLevels: LevelDef[] = [
  { id: 'beginner', label: 'Onboarding', shortLabel: 'On', swatch: '#4FB3A9', cap: 6, order: 1 },
  { id: 'intermediate', label: 'Teams', shortLabel: 'T', swatch: '#2F6EA8', cap: 6, order: 2 },
  { id: 'advanced', label: 'Leadership', shortLabel: 'L', swatch: '#6E3FB3', cap: 5, order: 3 },
];

export const branches: Branch[] = [
  {
    id: 'ski',
    name: 'Ski & Snowboard',
    tagline: 'Skischool-indeling voor krokus, pasen en 8 winterweken',
    gradient: 'gradient-ski',
    accentVar: '--color-ice',
    season: 'winter',
    poolNoun: 'skigroep',
    activityNoun: 'skiles',
    levels: skiLevels,
  },
  {
    id: 'surf',
    name: 'Surf & Beach',
    tagline: 'Zomerkampen aan de Atlantische kust',
    gradient: 'gradient-surf',
    accentVar: '--color-flow',
    season: 'zomer',
    poolNoun: 'surfgroep',
    activityNoun: 'surfsessie',
    levels: surfLevels,
  },
  {
    id: 'school',
    name: 'Schoolreizen',
    tagline: 'Outdoor educatie voor middelbaar en MBO',
    gradient: 'gradient-school',
    accentVar: '--color-sun',
    season: 'jaar',
    poolNoun: 'klasgroep',
    activityNoun: 'activiteit',
    levels: schoolLevels,
  },
  {
    id: 'corporate',
    name: 'Corporate & Teams',
    tagline: 'Teambuilding en bedrijfsuitjes',
    gradient: 'gradient-corp',
    accentVar: '--color-flow-2',
    season: 'jaar',
    poolNoun: 'teamgroep',
    activityNoun: 'workshop',
    levels: corpLevels,
  },
];

export function getBranch(id: string): Branch {
  return branches.find((b) => b.id === id) ?? branches[0];
}

export const roles: Role[] = [
  {
    id: 'admin',
    name: 'Lotte van Dijk',
    initials: 'LD',
    email: 'lotte@flowtrack-travel.com',
    scope: 'Operations Lead — volledig beheer',
    avatar: '/photos/avatar-lotte.jpg',
    permissions: {
      canEditPools: true,
      canEditTrips: true,
      canSeeMedical: true,
      canManageStaff: true,
      canSeeFinance: true,
    },
    visibleNavItems: ['dashboard', 'reizen', 'pools', 'deelnemers', 'medewerkers', 'instellingen'],
  },
  {
    id: 'coordinator',
    name: 'Arnout De Smet',
    initials: 'AD',
    email: 'arnout@flowtrack-travel.com',
    scope: 'Skischool-coordinator — plant clusters en wijst monitoren toe',
    avatar: '/photos/avatar-arnout.jpg',
    permissions: {
      canEditPools: true,
      canEditTrips: true,
      canSeeMedical: false,
      canManageStaff: true,
      canSeeFinance: false,
    },
    visibleNavItems: ['dashboard', 'reizen', 'pools', 'deelnemers', 'medewerkers'],
  },
  {
    id: 'instructor',
    name: 'Stefan Auer',
    initials: 'SA',
    email: 'stefan@flowtrack-travel.com',
    scope: 'Skimonitor — ziet alleen eigen groepen + QR scan',
    avatar: '/photos/avatar-stefan.png',
    permissions: {
      canEditPools: false,
      canEditTrips: false,
      canSeeMedical: false,
      canManageStaff: false,
      canSeeFinance: false,
    },
    visibleNavItems: ['dashboard', 'pools'],
  },
  {
    id: 'medical',
    name: 'Dr. Inez Coelho',
    initials: 'IC',
    email: 'inez@flowtrack-travel.com',
    scope: 'Medische staf — toegang tot gezondheidsinfo',
    avatar: '/photos/avatar-inez.jpg',
    permissions: {
      canEditPools: false,
      canEditTrips: false,
      canSeeMedical: true,
      canManageStaff: false,
      canSeeFinance: false,
    },
    visibleNavItems: ['dashboard', 'deelnemers'],
  },
];

export function getRole(id: string): Role {
  return roles.find((r) => r.id === id) ?? roles[0];
}

export function levelDef(branchId: string, levelId: string): LevelDef | undefined {
  return getBranch(branchId).levels.find((l) => l.id === levelId);
}
