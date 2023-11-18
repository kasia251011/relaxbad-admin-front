import { GroupType, Gender, Id } from './common';

export interface Group {
  _id: Id;
  type: GroupType;
  category: string;
  gender?: Gender;
}

export interface GroupWithoutId extends Omit<Group, '_id'> {}

export interface Single {
  playerId: Id;
  groupId: Id;
}

export interface Double {
  groupId: Id;
  playerId1: Id;
  playerId2: Id;
}
