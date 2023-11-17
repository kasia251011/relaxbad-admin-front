import { GroupType, Gender } from './common';

export interface Group {
  id?: string;
  type: GroupType;
  category: string;
  gender?: Gender;
}
