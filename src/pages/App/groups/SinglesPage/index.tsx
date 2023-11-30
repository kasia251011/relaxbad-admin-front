import { Container, Grid, Stack, Typography } from '@mui/material';

import EmptyGroups from '@/components/groups/EmptyGroups';
import PlayersTable from '@/components/groups/PlayersTable';
import AddPlayerToGroupModal from '@/components/groups/singles/AddPlayerToGroupModal';
import { useGetAllGroupsQuery } from '@/redux/api/groupApi';

const SinglesPage = () => {
  const { data: singles, isLoading } = useGetAllGroupsQuery({ type: 'SINGLE' });

  if (isLoading) {
    <></>;
  }

  if (singles && singles.length === 0) {
    <Container>
      <EmptyGroups />
    </Container>;
  }

  return (
    <Container>
      <Stack direction="row" justifyContent="space-between" alignItems="flex-end">
        <Typography variant="h2" mt={2}>
          Single
        </Typography>
        <AddPlayerToGroupModal />
      </Stack>
      <Grid container>
        {singles?.map((single, i) => (
          <Grid item key={i} xs={6} md={4}>
            <PlayersTable key={single._id} group={single} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SinglesPage;
