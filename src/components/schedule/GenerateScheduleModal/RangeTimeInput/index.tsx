import { MultiInputTimeRangeField } from '@mui/x-date-pickers-pro/MultiInputTimeRangeField';
import dayjs from 'dayjs';
import { useEffect, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

import FieldWrapper from '../FieldWrapper';
import { ScheduleForm } from '@/redux/api/scheduleApi';
import { TIME_FORMAT } from '@/redux/types/common';

//TODO: First week should be monday
//TODO: Day should be displayed day/month/year
const defaultStartTime = dayjs().set('hour', 8).set('minute', 0).set('second', 0);
const defaultEndTime = dayjs().set('hour', 18).set('minute', 0).set('second', 0);

const RangeTimeInput = () => {
  const { setValue, watch } = useFormContext<ScheduleForm>();
  const startTimeRound = watch('startTime');
  const endTimeRound = watch('endTime');
  const startTimePickerValue = useMemo(
    () => (startTimeRound ? dayjs(startTimeRound, TIME_FORMAT) : defaultStartTime),
    [startTimeRound]
  );
  const endTimePickerValue = useMemo(
    () => (endTimeRound ? dayjs(endTimeRound, TIME_FORMAT) : defaultEndTime),
    [endTimeRound]
  );

  useEffect(() => {
    setValue('startTime', defaultStartTime.format(TIME_FORMAT));
    setValue('endTime', defaultEndTime.format(TIME_FORMAT));
  }, []);

  return (
    <FieldWrapper
      label={`Godziny trwania kolejki`}
      description={`Wybierz godzinę startu pierwszego meczu, oraz godzinę startu ostatniego meczu. Pamiętaj że mecze trwają średnio 30 minut`}>
      <MultiInputTimeRangeField
        ampm={false}
        format={TIME_FORMAT}
        onChange={(val) => {
          setValue(
            'startTime',
            val[0]?.format(TIME_FORMAT) ?? defaultStartTime.format(TIME_FORMAT)
          );
          setValue('endTime', val[1]?.format(TIME_FORMAT) ?? defaultEndTime.format(TIME_FORMAT));
        }}
        value={[startTimePickerValue, endTimePickerValue]}
        slotProps={{
          textField: ({ position }) => ({
            label: position === 'start' ? 'Pierwszy mecz' : 'Ostatni mecz'
          })
        }}
      />
    </FieldWrapper>
  );
};

export default RangeTimeInput;
