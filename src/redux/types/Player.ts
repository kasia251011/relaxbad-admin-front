import { Id, Role } from './common';

export interface User {
  _id: Id;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  role: Role[];
  singleId?: Id;
  doubleId?: Id;
  mixId?: Id;
}

export interface UserWithoutId extends Omit<User, '_id'> {}
