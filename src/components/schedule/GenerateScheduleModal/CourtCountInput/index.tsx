import { TextField } from '@mui/material';
import { useFormContext } from 'react-hook-form';

import FieldWrapper from '../FieldWrapper';
import { ScheduleForm } from '@/redux/api/scheduleApi';

const CourtCountInput = () => {
  const { register } = useFormContext<ScheduleForm>();

  return (
    <FieldWrapper label="Ilość kortów" description="Wybierz ilość dostępnych kortów do gier">
      <TextField
        {...register('courtCount')}
        defaultValue={4}
        type="number"
        InputProps={{ inputProps: { min: 1, max: 10 } }}
      />
    </FieldWrapper>
  );
};

export default CourtCountInput;
