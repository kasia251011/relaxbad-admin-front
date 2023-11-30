import { Container, Grid, Stack, Typography } from '@mui/material';

import AddPlayerToGroupModal from '@/components/groups/doubles/AddPlayerToGroupModal';
import EmptyGroups from '@/components/groups/EmptyGroups';
import PlayersTable from '@/components/groups/PlayersTable';
import { useGetAllGroupsQuery } from '@/redux/api/groupApi';
import { GroupType } from '@/redux/types/common';
interface AddPlayerToGroupModalProps {
  groupType: GroupType;
}
const DoublesPage = ({ groupType }: AddPlayerToGroupModalProps) => {
  const { data: groups, isLoading } = useGetAllGroupsQuery({ type: groupType });

  if (isLoading) {
    <></>;
  }

  if (groups && groups.length === 0) {
    return (
      <Container>
        <EmptyGroups />
      </Container>
    );
  }

  return (
    <Container>
      <Stack direction="row" justifyContent="space-between" alignItems="flex-end">
        <Typography variant="h2" mt={2}>
          {groupType === 'DOUBLE' ? 'Deble' : 'Mixty'}
        </Typography>
        <AddPlayerToGroupModal groupType={groupType} />
      </Stack>
      <Grid container>
        {groups?.map((group, i) => (
          <Grid item key={i} xs={6} md={4}>
            <PlayersTable key={group._id} group={group} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default DoublesPage;
