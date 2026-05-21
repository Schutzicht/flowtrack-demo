import { branches, roles, getBranch, getRole } from './branches';
import type { Branch, Role, BranchId, RoleId } from './types';

export interface AppContext {
  branch: Branch;
  role: Role;
  branchId: BranchId;
  roleId: RoleId;
}

export function getAppContext(url: URL): AppContext {
  const b = (url.searchParams.get('b') ?? 'ski') as BranchId;
  const r = (url.searchParams.get('r') ?? 'admin') as RoleId;
  return {
    branch: getBranch(b),
    role: getRole(r),
    branchId: b,
    roleId: r,
  };
}

export function buildUrl(path: string, b?: string, r?: string): string {
  const params = new URLSearchParams();
  if (b) params.set('b', b);
  if (r) params.set('r', r);
  const qs = params.toString();
  return qs ? `${path}?${qs}` : path;
}

export { branches, roles };
