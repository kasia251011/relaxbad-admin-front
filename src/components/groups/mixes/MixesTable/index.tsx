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

const MixesTable = ({ group }: PlayersTableProps) => {
  const { data: mixes, isLoading } = useGetDoublesQuery({
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
      <PlayersTable isEmpty={mixes?.length === 0}>
        <>
          {isLoading && <TableSkeleton colsNum={2} />}
          {mixes?.map((mix, index) => (
            <PlayerRow
              key={mix._id}
              playerId={mix.playerId1}
              playerId2={mix.playerId2}
              index={index + 1}
              onRemoveClick={() => {
                remove({ id: mix._id, groupType: 'MIX' });
              }}
            />
          ))}
        </>
      </PlayersTable>
    </Stack>
  );
};

export default MixesTable;
