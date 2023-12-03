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
import PlayerFirstSelect from './PlayerFirstSelect';
import PlayerSecondSelect from './PlayerSecondSelect';

import { useAddDoubleMutation } from '@/redux/api/doublesApi';
import { DoubleWithoutId } from '@/redux/types/Group';

const AddPlayerToMixModal = () => {
  const [open, setOpen] = useState(false);
  const methods = useForm<DoubleWithoutId>();
  const [addDouble, { isLoading }] = useAddDoubleMutation();

  const handleCancel = () => {
    methods.reset();
    setOpen(false);
  };

  const handleSave = (double: DoubleWithoutId) => {
    addDouble({ double, groupType: 'MIX' })
      .unwrap()
      .then(() => {
        handleCancel();
      })
      .catch((e) => {
        toast.error(e.data.message);
      });
  };
  return (
    <>
      <Button
        variant="contained"
        onClick={() => setOpen(true)}
        startIcon={<PersonAddAltRoundedIcon />}>
        Dodaj zawodników
      </Button>
      <Dialog onClose={() => setOpen(false)} open={open}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleSave)}>
            <DialogTitle>Dodaj zawodników do grupy</DialogTitle>
            <DialogContent>
              <DialogContentText fontSize="0.8rem">
                Wybierz zawodników, a następnie dodaj go do jednej z dostępnych grup.
              </DialogContentText>
              <Stack gap={3} mt={5} mb={2}>
                <GroupSelect />
                <PlayerFirstSelect />
                <PlayerSecondSelect />
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

export default AddPlayerToMixModal;
