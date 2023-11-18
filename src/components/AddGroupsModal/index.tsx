import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack
} from '@mui/material';
import { useState } from 'react';

import AddGroup from './AddGroup';

import { useAddGroupsMutation } from '@/redux/api/groupApi';
import { resetGroups } from '@/redux/slices/addGroups';
import { useAppDispatch, useAppSelector } from '@/redux/store';

const AddGroupsModal = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const groups = useAppSelector((state) => state.addGroups.groups);
  const [addGroups] = useAddGroupsMutation();

  const handleCancel = () => {
    setOpen(false);
    dispatch(resetGroups());
  };

  const handleSave = () => {
    addGroups(groups).then(() => {
      handleCancel();
    });
  };

  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Utwórz kategorie
      </Button>
      <Dialog onClose={() => setOpen(false)} open={open} fullScreen>
        <DialogTitle>Stwórz grupy</DialogTitle>
        <DialogContent>
          <DialogContentText fontSize="0.8rem">
            Utwórz grupy które będą dostępne dla zawodników przy zapisach.
          </DialogContentText>
          <Stack direction="row" justifyContent="space-between" mt={3}>
            <AddGroup gender="MAN" type="SINGLE" />
            <AddGroup gender="WOMAN" type="SINGLE" />
            <AddGroup gender="MAN" type="DOUBLE" />
            <AddGroup gender="WOMAN" type="DOUBLE" />
            <AddGroup type="MIX" />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Anuluj</Button>
          <Button variant="contained" disabled={groups.length === 0} onClick={handleSave}>
            Zatwierdź
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddGroupsModal;
