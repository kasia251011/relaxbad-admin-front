import { FormControl, MenuItem, Select, InputLabel } from '@mui/material';
import { useEffect } from 'react';
import { useFormContext, Controller } from 'react-hook-form';

import { DoubleForm } from '..';
import InputSkeleton from '@/components/skeletons/InputSkeleton';
import { useGetAllGroupsQuery } from '@/redux/api/groupApi';
import { getGroupName } from '@/utility/getGroupName';

const GroupSelect = () => {
  const { reset, control, setValue, watch } = useFormContext<DoubleForm>();
  const { data: groups, isLoading } = useGetAllGroupsQuery({ type: 'DOUBLE' });
  const groupId = watch('groupId');

  useEffect(() => {
    const gender = groups?.find((group) => group._id === groupId)?.gender;
    if (gender) {
      setValue('gender', gender);
    }
  }, [groupId, groups]);

  useEffect(() => {
    if (groups) {
      reset({ groupId: groups?.[0]._id, gender: groups?.[0].gender });
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
