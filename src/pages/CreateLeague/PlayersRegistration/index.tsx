import { Box, Stack, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';

import useCreateLeagueSteeper from '@/hooks/useCreateLeagueStepper';

const Step = () => {
  const { currentStage } = useCreateLeagueSteeper();

  return (
    <Stack height="100%">
      <Typography
        mt={4}
        color={currentStage !== 'PLAYERS_REGISTRATION' ? '#D3D3D3' : 'CaptionText'}
        fontSize=".7rem">
        1. Zapisy zawodników
      </Typography>
      <Typography
        mt={1}
        color={currentStage !== 'GAMES_SCHEDULE_CREATION' ? '#D3D3D3' : 'CaptionText'}
        fontSize=".7rem">
        2. Tworzenie terminarza
      </Typography>
      <Box mt={8} height="100%" mb={8}>
        <Outlet />
      </Box>
    </Stack>
  );
};

export default Step;
