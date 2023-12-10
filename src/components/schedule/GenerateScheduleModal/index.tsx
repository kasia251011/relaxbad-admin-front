import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack } from '@mui/material';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import CourtCountInput from './CourtCountInput';
import RangeTimeInput from './RangeTimeInput';
import StartDateInput from './StartDateInput';

import { ScheduleForm, useGenerateScheduleMutation } from '@/redux/api/scheduleApi';

const GenerateScheduleModal = () => {
  const [open, setOpen] = useState(false);
  const methods = useForm<ScheduleForm>();
  const [generateSchedule] = useGenerateScheduleMutation();

  const handleCancel = () => {
    setOpen(false);
  };

  const handleSave = (scheduleForm: ScheduleForm) => {
    generateSchedule(scheduleForm);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)} variant="contained">
        Stwórz terminarz
      </Button>
      <Dialog onClose={handleCancel} open={open}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleSave)}>
            <DialogTitle fontSize="1.3rem" fontWeight="bold">
              Stwórz terminarz
            </DialogTitle>
            <DialogContent>
              <Stack gap={5} mt={2}>
                <StartDateInput />
                <CourtCountInput />
                <RangeTimeInput />
              </Stack>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCancel}>Anuluj</Button>
              <Button variant="contained" type="submit">
                Zatwierdź
              </Button>
            </DialogActions>
          </form>
        </FormProvider>
      </Dialog>
    </>
  );
};

export default GenerateScheduleModal;
