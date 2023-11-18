import EditRoundedIcon from '@mui/icons-material/EditRounded';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Tooltip
} from '@mui/material';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import PersonalDataInputs from '../AddUserModal/PersonalDataInputs';
import { useUpdateUserMutation } from '@/redux/api/userApi';
import { User, UserWithoutId } from '@/redux/types/Player';

const EditUserModal = ({ savedUser }: { savedUser: User }) => {
  const [open, setOpen] = useState(false);
  const methods = useForm<UserWithoutId>({
    defaultValues: savedUser
  });
  const [updateUser] = useUpdateUserMutation();

  const handleCancel = () => {
    setOpen(false);
  };

  const handleSave = (user: UserWithoutId) => {
    updateUser({ id: savedUser._id, user: user }).then(() => {
      handleCancel();
    });
  };

  return (
    <>
      <Tooltip title="Edytuj" placement="top">
        <IconButton sx={{ mr: 1 }} onClick={() => setOpen(true)}>
          <EditRoundedIcon />
        </IconButton>
      </Tooltip>
      <Dialog onClose={() => setOpen(false)} open={open}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleSave)}>
            <DialogTitle>Dodaj zawodnika</DialogTitle>
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

export default EditUserModal;
