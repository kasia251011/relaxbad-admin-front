import { Container, Stack, Typography } from '@mui/material';

import AddGroupsModal from '@/components/AddGroupsModal';
import PlayersTable from '@/components/PlayersTable';
import { useGetAllGroupsQuery } from '@/redux/api/groupApi';
import COLOR from '@/themes/colors';

const NoGroups = () => {
  return (
    <Stack alignItems="center" justifyContent="center" height="100%">
      <Typography variant="h2" mb={1}>
        Nie utworzono żadnych grup na ten sezon
      </Typography>
      <Typography color={COLOR.LIGHT_GREY_TEXT} mb={5}>
        Utwórz wybrane kategorie a następnie rozpocznij zapisy na ligę 2023/2024
      </Typography>
      <AddGroupsModal />
    </Stack>
  );
};

const GroupsPage = () => {
  const { data: groups } = useGetAllGroupsQuery();

  //TODO: Loading

  return (
    <Container>
      {groups && groups.length > 0 ? (
        <Stack>
          <Stack>
            {groups?.map((group) => <PlayersTable key={group._id} groupId={group._id} />)}
          </Stack>
        </Stack>
      ) : (
        <NoGroups />
      )}
    </Container>
  );
};

export default GroupsPage;
