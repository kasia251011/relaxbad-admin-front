import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack } from '@mui/material';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import PersonalDataInputs from './PersonalDataInputs';

import { useAddUserMutation } from '@/redux/api/userApi';
import { UserWithoutId } from '@/redux/types/Player';

const AddUserModal = () => {
  const [open, setOpen] = useState(false);
  const methods = useForm<UserWithoutId>();
  const [addUser] = useAddUserMutation();

  const handleCancel = () => {
    setOpen(false);
    methods.reset();
  };

  const handleSave = (user: UserWithoutId) => {
    addUser(user).then(() => {
      handleCancel();
    });
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={() => setOpen(true)}
        startIcon={<PersonAddAltRoundedIcon />}>
        Dodaj użytkownika
      </Button>
      <Dialog onClose={() => setOpen(false)} open={open}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleSave)}>
            <DialogTitle>Dodaj użytkownika</DialogTitle>
            <DialogContent>
              <Stack>
                <PersonalDataInputs />
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

export default AddUserModal;
