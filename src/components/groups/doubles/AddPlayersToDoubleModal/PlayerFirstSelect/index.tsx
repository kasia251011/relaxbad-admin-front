import { FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { DoubleForm } from '..';
import InputSkeleton from '@/components/skeletons/InputSkeleton';
import { useGetAllUsersAvailableForDoubleQuery } from '@/redux/api/userApi';

const PlayerFirstSelect = () => {
  const { control, setValue, watch } = useFormContext<DoubleForm>();
  const gender = watch('gender');
  const { data: users, isLoading, isFetching } = useGetAllUsersAvailableForDoubleQuery({ gender });

  //Change value after group (gender) changed
  useEffect(() => {
    if (users && users.length > 0) {
      setValue('playerId1', users?.[0]._id);
    }
  }, [users]);

  if (isLoading || isFetching) {
    return <InputSkeleton />;
  }

  if (users && users.length === 0) {
    return (
      <Typography color="red" variant="body2" ml={1}>
        Brak wystarczającej ilości zawodników. Utwórz nowego użytkownika
      </Typography>
    );
  }

  return (
    <FormControl>
      <InputLabel>Zawodnik pierwszy</InputLabel>
      <Controller
        name="playerId1"
        control={control}
        defaultValue={users?.[0]._id}
        render={({ field }) => (
          <Select {...field} label="Zawodnik pierwszy" size="small">
            {users?.map((user, index) => (
              <MenuItem key={index} value={user._id ?? ''}>
                {user.firstName} {user.lastName}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </FormControl>
  );
};

export default PlayerFirstSelect;
