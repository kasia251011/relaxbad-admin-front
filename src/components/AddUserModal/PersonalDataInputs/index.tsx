import { Stack, TextField, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';

import { PlayerWithoutId } from '@/redux/types/Player';

//TODO: Add role checkboxes

const inputRequirement = {
  required: {
    value: true,
    message: 'To pole jest wymagane'
  }
};

const PersonalDataInputs = () => {
  const {
    register,
    formState: { errors }
  } = useFormContext<PlayerWithoutId>();

  return (
    <Stack gap={1}>
      <Typography fontWeight="600">Dane osobowe</Typography>
      <Stack direction="row" gap={1}>
        <TextField
          autoFocus
          size="small"
          {...register('firstName', inputRequirement)}
          label="Imię"
          error={!!errors.firstName}
          helperText={errors.firstName?.message}
        />
        <TextField
          size="small"
          {...register('lastName', inputRequirement)}
          label="Nazwisko"
          error={!!errors.lastName}
          helperText={errors.lastName?.message}
        />
      </Stack>
      <Stack direction="row" gap={1}>
        <TextField
          size="small"
          {...register('phoneNumber', inputRequirement)}
          label="Telefon"
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber?.message}
        />
        <TextField
          size="small"
          {...register('email', inputRequirement)}
          label="email"
          error={!!errors.email}
          helperText={errors.email?.message}
        />
      </Stack>
    </Stack>
  );
};

export default PersonalDataInputs;
