export type BranchId = 'surf' | 'ski' | 'school' | 'corporate';
export type RoleId = 'admin' | 'coordinator' | 'instructor' | 'medical';

// Levels: combined union of all branches' levels.
// Surf/school/corporate: beginner..pro. Ski uses FlowTrack-specific naming.
export type Level =
  | 'beginner'
  | 'intermediate'
  | 'advanced'
  | 'pro'
  | 'green'
  | 'blue_bunnies'
  | 'red_racoons'
  | 'black_bears'
  | 'yellow';

export type TripStatus = 'planned' | 'active' | 'closed';

export interface LevelDef {
  id: Level;
  label: string;
  shortLabel: string;
  swatch: string; // hex
  cap: number; // max group size
  order: number;
}

export interface Branch {
  id: BranchId;
  name: string;
  tagline: string;
  gradient: string;
  accentVar: string;
  season: 'zomer' | 'winter' | 'jaar';
  poolNoun: string;
  activityNoun: string;
  levels: LevelDef[];
}

export interface Role {
  id: RoleId;
  name: string;
  initials: string;
  email: string;
  scope: string;
  avatar?: string;
  permissions: {
    canEditPools: boolean;
    canEditTrips: boolean;
    canSeeMedical: boolean;
    canManageStaff: boolean;
    canSeeFinance: boolean;
  };
  visibleNavItems: string[];
}

export interface Instructor {
  id: string;
  name: string;
  initials: string;
  branchIds: BranchId[];
  specialties: Level[];
  languages: string[];
  rating: number;
  status: 'available' | 'busy' | 'off';
  role?: 'monitor' | 'coordinator' | 'instructor';
}

export interface Participant {
  id: string;
  name: string;
  initials: string;
  age: number;
  level: Level;
  branchHint?: BranchId;
  notes?: string;
  preferences?: string[]; // names this participant wants to be with
  locationId?: string; // for ski multi-location
  medical?: {
    allergies?: string[];
    notes?: string;
    insurance?: string;
  };
  emergencyContact?: { name: string; phone: string };
  assignedPoolId?: string | null;
}

export interface Pool {
  id: string;
  tripId: string;
  name: string;
  level: Level;
  ageRange: [number, number];
  capacity: number;
  instructorId?: string;
  participantIds: string[];
  meetingPoint?: string;
  cluster?: string; // A-F for ski
  locationId?: string;
}

export interface Location {
  id: string;
  name: string;
  shortName: string;
  enrolled: number;
  capacity: number;
}

export interface Trip {
  id: string;
  branchId: BranchId;
  title: string;
  destination: string;
  start: string;
  end: string;
  status: TripStatus;
  capacity: number;
  enrolled: number;
  coverGradientClass: string;
  description: string;
  basePrice: number;
  poolIds: string[];
  locations?: Location[];
  isFeatured?: boolean;
}
