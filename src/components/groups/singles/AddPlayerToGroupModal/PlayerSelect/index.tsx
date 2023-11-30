import { MenuItem, TextField } from '@mui/material';
import { useEffect, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

import InputSkeleton from '@/components/skeletons/InputSkeleton';
import { useGetAllUsersQuery } from '@/redux/api/userApi';
import { Single } from '@/redux/types/Group';

const PlayerSelect = () => {
  const { register, setValue } = useFormContext<Single>();
  const { data: users, isLoading } = useGetAllUsersQuery({ availableFor: 'SINGLE' });
  const defaultValue = useMemo(() => users?.[0]._id, [users]);

  useEffect(() => {
    setValue('playerId', defaultValue ?? '');
  }, [defaultValue]);

  if (isLoading) {
    return <InputSkeleton />;
  }

  return (
    <TextField
      size="small"
      select
      fullWidth
      {...register('playerId')}
      defaultValue={defaultValue}
      label="Zawodnik">
      {users?.map((user, index) => (
        <MenuItem key={index} value={user._id ?? ''}>
          {user.firstName} {user.lastName}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default PlayerSelect;
