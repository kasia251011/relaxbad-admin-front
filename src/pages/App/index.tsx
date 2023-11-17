import { Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';

import SideNav from '@/components/SideNav';

const App = () => {
  return (
    <Stack flexDirection="row">
      <SideNav />
      <Outlet />
    </Stack>
  );
};

export default App;
