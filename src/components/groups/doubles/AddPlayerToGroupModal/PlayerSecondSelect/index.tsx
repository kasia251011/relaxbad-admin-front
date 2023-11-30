import { MenuItem, TextField } from '@mui/material';
import { useEffect, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

import InputSkeleton from '@/components/skeletons/InputSkeleton';
import { useGetAllUsersQuery } from '@/redux/api/userApi';
import { GroupType } from '@/redux/types/common';
import { Double } from '@/redux/types/Group';

interface PlayerSecondSelectProps {
  groupType: GroupType;
}

const PlayerSecondSelect = ({ groupType }: PlayerSecondSelectProps) => {
  const { register, setValue } = useFormContext<Double>();
  const { data: users, isLoading } = useGetAllUsersQuery({ availableFor: groupType });
  const defaultValue = useMemo(() => users?.[1]._id, [users]);

  useEffect(() => {
    setValue('playerId2', defaultValue ?? '');
  }, [defaultValue]);

  if (isLoading) {
    return <InputSkeleton />;
  }

  return (
    <TextField
      size="small"
      select
      fullWidth
      {...register('playerId2')}
      defaultValue={defaultValue}
      label="Zawodnik drugi">
      {users?.map((user, index) => (
        <MenuItem key={index} value={user._id ?? ''}>
          {user.firstName} {user.lastName}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default PlayerSecondSelect;
