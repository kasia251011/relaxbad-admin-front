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

import GroupSelect from './GroupSelect';
import PlayerSelect from './PlayerSelect';

import { useAddRecordMutation } from '@/redux/api/groupApi';
import { Single } from '@/redux/types/Group';

const AddPlayerToGroupModal = () => {
  const [open, setOpen] = useState(false);
  const methods = useForm<Single>();
  const [addSingle, { isLoading }] = useAddRecordMutation();

  const handleCancel = () => {
    methods.reset();
    setOpen(false);
  };

  const handleSave = (single: Single) => {
    addSingle({ record: single, recordType: 'singles', groupType: 'SINGLE' }).then(() => {
      handleCancel();
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
            <DialogTitle>Dodaj zawodnika do grupy</DialogTitle>
            <DialogContent>
              <DialogContentText fontSize="0.8rem">
                Wybierz zawodnika a następnie dodaj go do jednej z dostępnych grup.
              </DialogContentText>
              <Stack gap={3} mt={5} mb={2}>
                <PlayerSelect />
                <GroupSelect />
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

export default AddPlayerToGroupModal;
