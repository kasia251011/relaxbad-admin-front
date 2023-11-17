import { Stack, Typography, Button } from '@mui/material';

import PLAYING_BADMINTON_IMG from '@/assets/playing-badminton.svg';
import useCreateLeagueSteeper from '@/hooks/useCreateLeagueStepper';

const Start = () => {
  const { nextStep } = useCreateLeagueSteeper();
  return (
    <Stack direction="row" justifyContent="space-between" height="100%">
      <Stack mt={30}>
        <Typography variant="h1" mb={4}>
          Rozpocznij ligę na sezon 2023/2024
        </Typography>
        <Typography variant="subtitle1" mb={4}>
          Stwórz swoją ligę badmintona i bądź na bieżąco z wynikami swoich zawodników. Niech emocje
          związane z grą nigdy nie opuszczają Cię!
        </Typography>
        <Button variant="contained" onClick={nextStep}>
          Rozpocznij
        </Button>
      </Stack>
      <img src={PLAYING_BADMINTON_IMG} className="playing-badminton" />
    </Stack>
  );
};

export default Start;
