import { Stack, Typography } from '@mui/material';

import COLOR from '@/themes/colors';

const EmptyGroups = () => {
  return (
    <Stack alignItems="center" justifyContent="center" height="100%">
      <Typography variant="h2" mb={1}>
        Nie utworzono grup
      </Typography>
      <Typography color={COLOR.LIGHT_GREY_TEXT} mb={5}>
        W obecnie trwającej lidze nie zostały utworzone grupy w tym typie gry
      </Typography>
    </Stack>
  );
};

export default EmptyGroups;
