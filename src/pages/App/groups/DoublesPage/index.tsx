import { Grid } from '@mui/material';

import GroupPage from '../GroupPage';
import AddPlayerToDoubleModal from '@/components/groups/doubles/AddPlayersToDoubleModal';
import DoublesTable from '@/components/groups/doubles/DoublesTable';
import { useGetAllGroupsQuery } from '@/redux/api/groupApi';

const DoublesPage = () => {
  const { data: groups, isLoading } = useGetAllGroupsQuery({ type: 'DOUBLE' });

  if (isLoading) {
    <></>;
  }

  return (
    <GroupPage
      AddGroupButton={AddPlayerToDoubleModal}
      groupType={'DOUBLE'}
      isEmpty={groups?.length === 0}>
      {groups?.map((group, i) => (
        <Grid item key={i} xs={6} md={4}>
          <DoublesTable key={group._id} group={group} />
        </Grid>
      ))}
    </GroupPage>
  );
};

export default DoublesPage;
