import { Container, Typography } from '@mui/material';

import GenerateScheduleModal from '@/components/schedule/GenerateScheduleModal';

const GamesSchedulePage = () => {
  return (
    <Container>
      <Typography>Games Schedule Page</Typography>
      <GenerateScheduleModal />
    </Container>
  );
};

export default GamesSchedulePage;
