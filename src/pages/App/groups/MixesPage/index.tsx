import { Grid } from '@mui/material';

import GroupPage from '../GroupPage';
import AddPlayerToMixModal from '@/components/groups/mixes/AddPlayersToMixModal';
import MixesTable from '@/components/groups/mixes/MixesTable';
import { useGetAllGroupsQuery } from '@/redux/api/groupApi';

const MixesPage = () => {
  const { data: groups, isLoading } = useGetAllGroupsQuery({ type: 'MIX' });

  if (isLoading) {
    <></>;
  }

  return (
    <GroupPage
      AddGroupButton={AddPlayerToMixModal}
      groupType={'MIX'}
      isEmpty={groups?.length === 0}>
      {groups?.map((group, i) => (
        <Grid item key={i} xs={6} md={4}>
          <MixesTable key={group._id} group={group} />
        </Grid>
      ))}
    </GroupPage>
  );
};

export default MixesPage;
