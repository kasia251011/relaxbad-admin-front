import { Id, Role } from './common';

export interface User {
  _id: Id;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  role: Role[];
}

export interface UserWithoutId extends Omit<User, '_id'> {}

export interface Player extends User {
  singleId?: Id;
  doubleId?: Id;
  mixId?: Id;
}

export interface PlayerWithoutId extends Omit<Player, '_id'> {}
