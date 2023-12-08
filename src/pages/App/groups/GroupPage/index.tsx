import { Container, Grid, Stack, Typography } from '@mui/material';
import { ComponentType, PropsWithChildren } from 'react';

import { useGetRegisterStatusQuery } from '@/redux/api/registerStatusApi';
import { GroupType, RegisterStatus } from '@/redux/types/common';
import COLOR from '@/themes/colors';
import { getGroupName } from '@/utility/getGroupName';

interface AddPlayerToGroupModalProps extends PropsWithChildren {
  groupType: GroupType;
  AddRecordButton: ComponentType;
  isEmpty: boolean;
}

const EmptyGroups = () => {
  return (
    <Stack alignItems="center" justifyContent="center" height="100%">
      <Typography variant="h2" mb={1}>
        Nie utworzono grup
      </Typography>
      <Typography color={COLOR.LIGHT_GREY_TEXT} mb={5}>
        W obecnie trwającej lidze nie zostały utworzone grupy w tym typie gry
      </Typography>
    </Stack>
  );
};

const GroupPage = ({
  groupType,
  children,
  AddRecordButton: AddGroupButton,
  isEmpty
}: AddPlayerToGroupModalProps) => {
  const { data: registerStatus } = useGetRegisterStatusQuery();

  if (isEmpty) {
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
          {getGroupName(groupType)}
        </Typography>
        {registerStatus === RegisterStatus.ADMIN_REGISTER && <AddGroupButton />}
      </Stack>
      <Grid container>{children}</Grid>
    </Container>
  );
};

export default GroupPage;
