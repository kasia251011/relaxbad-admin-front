import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { IconButton, Stack, Typography } from '@mui/material';
import { useMemo, useState } from 'react';

import AddCategoryInput from './AddCategoryInput';
import CategoryItem from './CategoryItem';

import { useAppSelector } from '@/redux/store';
import { Gender, GroupType } from '@/redux/types/common';
import { getGroupName } from '@/utility/getGroupName';

interface AddGroupProps {
  type: GroupType;
  gender?: Gender;
}

const AddGroup = ({ gender, type }: AddGroupProps) => {
  const [inputAvailable, setInputAvailable] = useState(false);
  const groups = useAppSelector((state) => state.addGroups.groups);
  const categories = useMemo(
    () => groups.filter((group) => group.type === type && group.gender == gender),
    [groups]
  );

  return (
    <Stack alignItems="center" pt={4} width="200px" gap={1}>
      <Typography fontWeight="600" fontSize="0.8rem" mb={1}>
        {getGroupName(type, gender)}
      </Typography>
      {categories.map((cat, index) => (
        <CategoryItem key={index} category={cat.category} type={type} gender={gender} />
      ))}
      {inputAvailable ? (
        <AddCategoryInput
          type={type}
          onCloseInput={() => setInputAvailable(false)}
          gender={gender}
        />
      ) : (
        <IconButton
          color={'primary'}
          size="small"
          sx={{ width: 'fit-content' }}
          onClick={() => {
            setInputAvailable(true);
          }}>
          <AddRoundedIcon />
        </IconButton>
      )}
    </Stack>
  );
};

export default AddGroup;
