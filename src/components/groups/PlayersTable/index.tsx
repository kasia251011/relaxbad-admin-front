import {
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

import PlayerRow from './PlayerRow';

import ADD_IMAGE from '@/assets/add.png';
import TableSkeleton from '@/components/skeletons/TableSkeleton';
import { useGetRecordsQuery } from '@/redux/api/groupApi';
import { Double, Group, Single } from '@/redux/types/Group';
import COLOR from '@/themes/colors';
import { getGroupName } from '@/utility/getGroupName';

interface PlayersTableProps {
  group: Group;
}

const NoPlayers = () => {
  return (
    <Stack justifyContent="center" alignItems="center" m={3}>
      <img src={ADD_IMAGE} width="50px" />
      <Typography mt={2}>Ta grupa jest pusta. Dodaj zawodników!</Typography>
    </Stack>
  );
};

const PlayersTable = ({ group }: PlayersTableProps) => {
  const { data: records, isLoading } = useGetRecordsQuery({
    recordType: group.type === 'SINGLE' ? 'singles' : 'doubles',
    groupId: group._id
  });

  return (
    <Stack maxWidth="400px" px={2}>
      <Stack mt={5} mb={2}>
        <Typography variant="h6">
          {getGroupName(group?.type, group?.gender, group?.category)}
        </Typography>
      </Stack>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead sx={{ bgcolor: COLOR.LIGHT_GREY_BACKGROUND }}>
            <TableRow>
              <TableCell>Lp</TableCell>
              <TableCell>Imię i nazwisko</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading && <TableSkeleton colsNum={2} />}
            {records?.map((record, index) => (
              <PlayerRow
                key={record._id}
                groupType={group.type}
                recordId={record._id}
                playerId={
                  (record as Double & Single).playerId ?? (record as Double & Single).playerId1
                }
                playerId2={(record as Double & Single).playerId2}
                index={index + 1}
              />
            ))}
          </TableBody>
        </Table>
        {records?.length === 0 && <NoPlayers />}
      </TableContainer>
    </Stack>
  );
};

export default PlayersTable;
