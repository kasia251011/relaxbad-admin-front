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
import PlayerFirstSelect from './PlayerFirstSelect';
import PlayerSecondSelect from './PlayerSecondSelect';

import { useAddRecordMutation } from '@/redux/api/groupApi';
import { GroupType } from '@/redux/types/common';
import { Double } from '@/redux/types/Group';

interface AddPlayerToGroupModalProps {
  groupType: GroupType;
}

const AddPlayerToGroupModal = ({ groupType }: AddPlayerToGroupModalProps) => {
  const [open, setOpen] = useState(false);
  const methods = useForm<Double>();
  const [addDouble, { isLoading }] = useAddRecordMutation();

  const handleCancel = () => {
    methods.reset();
    setOpen(false);
  };

  const handleSave = (double: Double) => {
    addDouble({ record: double, recordType: 'doubles', groupType }).then(() => {
      handleCancel();
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
                <PlayerFirstSelect groupType={groupType} />
                <PlayerSecondSelect groupType={groupType} />
                <GroupSelect groupType={groupType} />
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
