import { GroupType, Gender, Id } from './common';

export interface Group {
  _id: Id;
  type: GroupType;
  category: string;
  gender?: Gender;
}

export interface GroupWithoutId extends Omit<Group, '_id'> {}

export interface Single {
  _id: Id;
  playerId: Id;
  groupId: Id;
}

export interface SingleWithoutId extends Omit<Single, '_id'> {}

export interface Double {
  _id: Id;
  groupId: Id;
  playerId1: Id;
  playerId2: Id;
}

export interface DoubleWithoutId extends Omit<Double, '_id'> {}
