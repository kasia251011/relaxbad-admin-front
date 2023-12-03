import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
  Stack,
  Typography
} from '@mui/material';
import { PropsWithChildren } from 'react';

import ADD_IMAGE from '@/assets/add.png';
import COLOR from '@/themes/colors';

interface PlayersTableProps extends PropsWithChildren {
  isEmpty: boolean;
}

const NoPlayers = () => {
  return (
    <Stack justifyContent="center" alignItems="center" m={3}>
      <img src={ADD_IMAGE} width="50px" />
      <Typography mt={2}>Ta grupa jest pusta. Dodaj zawodników!</Typography>
    </Stack>
  );
};

const PlayersTable = ({ children, isEmpty }: PlayersTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead sx={{ bgcolor: COLOR.LIGHT_GREY_BACKGROUND }}>
          <TableRow>
            <TableCell>Lp</TableCell>
            <TableCell>Imię i nazwisko</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{children}</TableBody>
      </Table>
      {isEmpty && <NoPlayers />}
    </TableContainer>
  );
};

export default PlayersTable;
