import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { useEffect, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

import FieldWrapper from '../FieldWrapper';
import { ScheduleForm } from '@/redux/api/scheduleApi';
import { DATE_FORMAT } from '@/redux/types/common';

const SATURDAY = 5;
const DAYS_IN_WEEK = 7;

const getNextSaturday = () => {
  const today = dayjs();
  const currentDayOfWeek = today.day();
  const daysUntilSaturday = (SATURDAY - currentDayOfWeek + DAYS_IN_WEEK) % DAYS_IN_WEEK;
  return today.add(daysUntilSaturday, 'day');
};

const StartDateInput = () => {
  const { setValue, watch } = useFormContext<ScheduleForm>();
  const startDate = watch('startDate');
  const datePickerValue = useMemo(
    () => (startDate ? dayjs(startDate, DATE_FORMAT) : getNextSaturday()),
    [startDate]
  );

  useEffect(() => {
    setValue('startDate', getNextSaturday().format(DATE_FORMAT));
  }, []);

  return (
    <FieldWrapper
      label={`Data rozpoczęcia`}
      description={`Wybrana przez ciebie data będzie równoznaczna z rozpoczęciem pierwszej kolejki`}>
      <DatePicker
        views={['month', 'day', 'year']}
        disablePast
        format={DATE_FORMAT}
        value={datePickerValue}
        shouldDisableDate={(day) => day.day() !== SATURDAY}
        onChange={(value) => {
          setValue(
            'startDate',
            value?.format(DATE_FORMAT) ?? getNextSaturday().format(DATE_FORMAT)
          );
        }}
      />
    </FieldWrapper>
  );
};

export default StartDateInput;
