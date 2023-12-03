import { FormControl, MenuItem, Select, InputLabel } from '@mui/material';
import { useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import InputSkeleton from '@/components/skeletons/InputSkeleton';
import { useGetAllGroupsQuery } from '@/redux/api/groupApi';
import { DoubleWithoutId } from '@/redux/types/Group';
import { getGroupName } from '@/utility/getGroupName';

const GroupSelect = () => {
  const { reset, control } = useFormContext<DoubleWithoutId>();
  const { data: groups, isLoading } = useGetAllGroupsQuery({ type: 'MIX' });

  useEffect(() => {
    if (groups) {
      reset({ groupId: groups?.[0]._id });
    }
  }, [groups]);

  if (isLoading) {
    return <InputSkeleton />;
  }

  return (
    <FormControl>
      <InputLabel>Grupa</InputLabel>
      <Controller
        name="groupId"
        control={control}
        defaultValue={groups?.[0]._id}
        render={({ field }) => (
          <Select {...field} label="Grupa" size="small">
            {groups?.map((group, index) => (
              <MenuItem key={index} value={group._id ?? ''}>
                {getGroupName(group.type, group.gender, group.category)}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </FormControl>
  );
};

export default GroupSelect;
