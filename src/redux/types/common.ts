/* eslint-disable no-unused-vars */
export type Gender = 'MAN' | 'WOMAN';
export type GroupType = 'SINGLE' | 'MIX' | 'DOUBLE';
export type Id = string | null;

export type Role = 'ADMIN' | 'JUDGE' | 'PLAYER';
export type RecordType = 'doubles' | 'singles';
export enum RegisterStatus {
  NO_GROUPS = 'NO_GROUPS',
  USERS_REGISTER = 'USERS_REGISTER',
  ADMIN_REGISTER = 'ADMIN_REGISTER',
  CLOSED = 'CLOSED'
}
