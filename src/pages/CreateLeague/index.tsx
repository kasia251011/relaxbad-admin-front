import './CreateLeague.style.scss';

import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

import BLOB_IMG from '@/assets/light-blob.svg';

const CreateLeaguePage = () => {
  return (
    <Box className="create-league-page">
      <Container maxWidth="lg" sx={{ height: '100%' }}>
        <Outlet />
      </Container>
      <img src={BLOB_IMG} className="blob" />
    </Box>
  );
};

export default CreateLeaguePage;
