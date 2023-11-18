import { Chip } from '@mui/material';

import { removeGroup } from '@/redux/slices/addGroups';
import { useAppDispatch } from '@/redux/store';
import { GroupWithoutId } from '@/redux/types/Group';

const CategoryItem = (group: GroupWithoutId) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(removeGroup(group));
  };

  return <Chip sx={{ fontSize: '0.7rem' }} label={group.category} onDelete={handleDelete} />;
};

export default CategoryItem;
