import { FormControl, MenuItem, Select, InputLabel } from '@mui/material';
import { useFormContext } from 'react-hook-form';

import InputSkeleton from '@/components/skeletons/InputSkeleton';
import { useGetAllGroupsQuery } from '@/redux/api/groupApi';
import { Single } from '@/redux/types/Group';
import { getGroupName } from '@/utility/getGroupName';

const GroupSelect = () => {
  const { register } = useFormContext<Single>();
  const { data: groups, isLoading } = useGetAllGroupsQuery({ type: 'SINGLE' });

  if (isLoading) {
    return <InputSkeleton />;
  }

  return (
    <FormControl fullWidth>
      <InputLabel>Grupa</InputLabel>
      <Select
        size="small"
        fullWidth
        {...register('groupId')}
        defaultValue={groups?.[0]._id}
        label="Grupa">
        {groups?.map((group, index) => (
          <MenuItem key={index} value={group._id ?? ''}>
            {getGroupName(group.type, group.gender, group.category)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default GroupSelect;
