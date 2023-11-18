import {
  Container,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';

import AddUserModal from '@/components/AddUserModal';
import UserRow from '@/components/UserRow';
import { useGetAllUsersQuery } from '@/redux/api/userApi';
import COLOR from '@/themes/colors';

//TODO: Loading

const UsersPage = () => {
  const { data: users } = useGetAllUsersQuery();

  return (
    <Container>
      <Stack mt={5} mb={2} direction="row" justifyContent="space-between">
        <Typography variant="h6">Użytkownicy</Typography>
        <AddUserModal />
      </Stack>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead sx={{ bgcolor: COLOR.LIGHT_GREY_BACKGROUND }}>
            <TableRow>
              <TableCell>Imie i nazwisko</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Numer telefonu</TableCell>
              <TableCell align="right">Role</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{users?.map((user) => <UserRow key={user._id} user={user} />)}</TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default UsersPage;
