import AddIcon from '@mui/icons-material/Add';
import { Fab, MenuItem, Stack, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

import { useAddGroupMutation } from '@/redux/api/groupApi';
import { Gender, GroupType } from '@/redux/types/common';
import { Group } from '@/redux/types/Group';
import { getGroupName } from '@/utility/getGroupName';

interface OptionValue {
  gender?: Gender;
  type: GroupType;
}

interface Option {
  value: OptionValue;
  label: string;
}

function generateOption({ type, gender }: OptionValue): Option {
  return {
    value: {
      type: type,
      gender: gender
    },
    label: getGroupName(type, gender)
  };
}

const options: Option[] = [
  { ...generateOption({ type: 'SINGLE', gender: 'MAN' }) },
  { ...generateOption({ type: 'SINGLE', gender: 'WOMAN' }) },
  { ...generateOption({ type: 'DOUBLE', gender: 'MAN' }) },
  { ...generateOption({ type: 'DOUBLE', gender: 'WOMAN' }) },
  { ...generateOption({ type: 'MIX' }) }
];

const CreateGroupInput = () => {
  const { register, setValue, handleSubmit } = useForm<Group>({
    defaultValues: {
      type: options[0].value.type,
      gender: options[0].value.gender
    }
  });
  const [addGroup] = useAddGroupMutation();

  const submit = (group: Group) => {
    addGroup(group);
  };

  return (
    <form>
      <Stack direction="row" gap={2}>
        <Fab size="small" color="primary" onClick={handleSubmit(submit)}>
          <AddIcon />
        </Fab>
        <TextField
          select
          size="small"
          label="Grupa"
          sx={{ width: '200px' }}
          defaultValue={0}
          onChange={(e) => {
            const option = options[parseInt(e.target.value)];
            setValue('type', option.value.type);
            setValue('gender', option.value.gender);
          }}>
          {options.map((op, index) => (
            <MenuItem key={index} value={index}>
              {op.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          size="small"
          label="Kategoria"
          focused
          sx={{ width: '90px' }}
          {...register('category', { required: 'true' })}
        />
      </Stack>
    </form>
  );
};

export default CreateGroupInput;
