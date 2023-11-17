import { Stack, Typography } from '@mui/material';

import COLOR from '@/themes/colors';

interface LogoProps {
  accountType?: 'Admin' | 'Judge';
}

const Logo = ({ accountType = 'Admin' }: LogoProps) => {
  return (
    <Stack direction="row" alignItems="end">
      <Typography fontWeight="bold">Relax</Typography>
      <Typography fontWeight="bold" color={COLOR.PRIMARY}>
        Bad
      </Typography>
      <Typography ml={1} fontSize="0.7rem" mb="2px">
        {accountType}
      </Typography>
    </Stack>
  );
};

export default Logo;
