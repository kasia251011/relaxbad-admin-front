import { Stack, Typography } from '@mui/material';

import PlayersTable from '@/components/groups/common/PlayersTable';
import PlayerRow from '@/components/groups/common/PlayersTable/PlayerRow';
import TableSkeleton from '@/components/skeletons/TableSkeleton';
import { useGetDoublesQuery, useRemoveDoubleByIdMutation } from '@/redux/api/doublesApi';
import { Group } from '@/redux/types/Group';
import { getGroupName } from '@/utility/getGroupName';

interface PlayersTableProps {
  group: Group;
}

const DoublesTable = ({ group }: PlayersTableProps) => {
  const { data: doubles, isLoading } = useGetDoublesQuery({
    groupId: group._id
  });
  const [remove] = useRemoveDoubleByIdMutation();

  return (
    <Stack maxWidth="400px" px={2}>
      <Stack mt={5} mb={2}>
        <Typography variant="h6">
          {getGroupName(group?.type, group?.gender, group?.category)}
        </Typography>
      </Stack>
      <PlayersTable isEmpty={doubles?.length === 0}>
        <>
          {isLoading && <TableSkeleton colsNum={2} />}
          {doubles?.map((double, index) => (
            <PlayerRow
              key={double._id}
              playerId={double.playerId1}
              playerId2={double.playerId2}
              index={index + 1}
              onRemoveClick={() => {
                remove({ id: double._id, groupType: 'DOUBLE' });
              }}
            />
          ))}
        </>
      </PlayersTable>
    </Stack>
  );
};

export default DoublesTable;
