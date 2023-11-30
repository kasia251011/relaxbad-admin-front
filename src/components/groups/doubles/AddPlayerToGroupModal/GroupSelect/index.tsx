import { FormControl, MenuItem, Select, InputLabel } from '@mui/material';
import { useFormContext } from 'react-hook-form';

import InputSkeleton from '@/components/skeletons/InputSkeleton';
import { useGetAllGroupsQuery } from '@/redux/api/groupApi';
import { GroupType } from '@/redux/types/common';
import { Single } from '@/redux/types/Group';
import { getGroupName } from '@/utility/getGroupName';

interface GroupSelectProps {
  groupType: GroupType;
}
const GroupSelect = ({ groupType }: GroupSelectProps) => {
  const { register } = useFormContext<Single>();
  const { data: groups, isLoading } = useGetAllGroupsQuery({ type: groupType });

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
