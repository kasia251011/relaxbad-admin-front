import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack
} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import GroupSelect from './GroupSelect';
import PlayerSelect from './PlayerSelect';

import { useAddSingleMutation } from '@/redux/api/singlesApi';
import { Gender } from '@/redux/types/common';
import { SingleWithoutId } from '@/redux/types/Group';

export interface SingleForm extends SingleWithoutId {
  gender: Gender;
}

const AddPlayerToSingleModal = () => {
  const [open, setOpen] = useState(false);
  const methods = useForm<SingleForm>();
  const [addSingle, { isLoading }] = useAddSingleMutation();

  const handleCancel = () => {
    methods.reset();
    setOpen(false);
  };

  const handleSave = (single: SingleForm) => {
    addSingle({ single: { ...single } })
      .unwrap()
      .then(() => {
        handleCancel();
      })
      .catch((e) => {
        toast.error(e.data);
      });
  };
  return (
    <>
      <Button
        variant="contained"
        onClick={() => setOpen(true)}
        startIcon={<PersonAddAltRoundedIcon />}>
        Dodaj zawodnika
      </Button>
      <Dialog onClose={() => setOpen(false)} open={open}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleSave)}>
            <DialogTitle>Dodaj zawodnika do singla</DialogTitle>
            <DialogContent>
              <DialogContentText fontSize="0.8rem">
                Wybierz grupę, a następnie dodaj do niej zawodnika/zawodniczkę
              </DialogContentText>
              <Stack gap={3} mt={5} mb={2}>
                <GroupSelect />
                <PlayerSelect />
              </Stack>
            </DialogContent>
            <DialogActions
              sx={{ display: 'flex', justifyContent: isLoading ? 'center' : 'flex-end' }}>
              {isLoading ? (
                <CircularProgress sx={{ justifySelf: 'center' }} size={20} />
              ) : (
                <>
                  <Button onClick={handleCancel}>Anuluj</Button>
                  <Button type="submit" variant="contained">
                    Zatwierdź
                  </Button>
                </>
              )}
            </DialogActions>
          </form>
        </FormProvider>
      </Dialog>
    </>
  );
};

export default AddPlayerToSingleModal;
