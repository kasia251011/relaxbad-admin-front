import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { Stack, TextField, Button, IconButton } from '@mui/material';
import { useForm } from 'react-hook-form';

import { addGroup } from '@/redux/slices/addGroups';
import { useAppDispatch } from '@/redux/store';
import { GroupType, Gender } from '@/redux/types/common';

interface AddGroupProps {
  type: GroupType;
  gender?: Gender;
  onCloseInput: () => void;
}

interface GroupSchema {
  category: string;
}

const AddCategoryInput = ({ gender, type, onCloseInput }: AddGroupProps) => {
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<GroupSchema>({
    mode: 'onChange'
  });

  const onSubmit = ({ category }: GroupSchema) => {
    dispatch(addGroup({ category, type, gender }));
    onCloseInput();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack gap={0.5}>
        <TextField
          size="small"
          {...register('category', {
            required: {
              value: true,
              message: 'Nazwa grupy musi zawierać conajmniej jedną literę'
            },
            maxLength: {
              value: 3,
              message: 'Maksymalnie 3 znaki'
            }
          })}
          error={!!errors.category}
          autoFocus
          helperText={errors.category?.message}
          inputProps={{ style: { fontSize: '0.7rem', textAlign: 'center' } }}
          onBlur={() => {
            // setInputAvailable(false);
          }}
        />
        <Stack direction="row" gap={0.5}>
          <Button
            variant="contained"
            size="small"
            type="submit"
            sx={{
              paddingX: 1,
              paddingY: '1px',
              fontSize: '0.7rem',
              borderRadius: 2,
              height: '30px'
            }}>
            Dodaj
          </Button>
          <IconButton
            sx={{ width: '30px', height: '30px' }}
            onClick={() => {
              onCloseInput();
            }}>
            <ClearRoundedIcon />
          </IconButton>
        </Stack>
      </Stack>
    </form>
  );
};

export default AddCategoryInput;
