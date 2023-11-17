import { Gender, GroupType } from '@/redux/types/common';

export const getGroupName = (type: GroupType, gender?: Gender, category?: string) => {
  let res = '';

  switch (type) {
    case 'SINGLE':
      res += 'Singiel';
      break;
    case 'MIX':
      res += 'Mixt';
      break;
    case 'DOUBLE':
      res += 'Debel';
      break;
  }

  if (gender) {
    gender === 'MAN' ? (res += ' Mężczyzn') : (res += ' Kobiet');
  }

  if (category) {
    res += ' ' + category;
  }

  return res;
};
