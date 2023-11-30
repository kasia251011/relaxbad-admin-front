import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Stack, Typography, Collapse } from '@mui/material';
import { PropsWithChildren, useState } from 'react';

import COLOR from '@/themes/colors';

interface NavExpandButtonProps extends PropsWithChildren {
  label: string;
}

const NavExpandButton = ({ label, children }: NavExpandButtonProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Stack
        sx={{
          ':hover': {
            cursor: 'pointer'
          }
        }}
        p="10px 20px"
        onClick={() => setOpen((prev) => !prev)}
        direction="row">
        {open ? <ExpandLess color={'primary'} /> : <ExpandMore color={'primary'} />}
        <Typography ml={1} color={COLOR.PRIMARY}>
          {label}
        </Typography>
      </Stack>
      <Collapse in={open} timeout="auto">
        <Stack ml={3}>{children}</Stack>
      </Collapse>
    </>
  );
};

export default NavExpandButton;
