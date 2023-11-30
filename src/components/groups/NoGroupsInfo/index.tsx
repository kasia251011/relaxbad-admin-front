import { Stack, Typography } from '@mui/material';

import AddGroupsModal from '../AddGroupsModal';
import COLOR from '@/themes/colors';

const NoGroups = () => {
  return (
    <Stack alignItems="center" justifyContent="center" height="100%">
      <Typography variant="h2" mb={1}>
        Nie utworzono żadnych grup na ten sezon
      </Typography>
      <Typography color={COLOR.LIGHT_GREY_TEXT} mb={5}>
        Utwórz wybrane kategorie a następnie rozpocznij zapisy na ligę 2023/2024
      </Typography>
      <AddGroupsModal />
    </Stack>
  );
};

export default NoGroups;
