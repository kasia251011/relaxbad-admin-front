import { Button, Container, Divider, Stack, Typography } from '@mui/material';
import { useMemo } from 'react';

import AddGroupsModal from '@/components/groups/AddGroupsModal';
import { useGetAllGroupsQuery } from '@/redux/api/groupApi';
import {
  useGetRegisterStatusQuery,
  useSetRegisterStatusMutation
} from '@/redux/api/registerStatusApi';
import { RegisterStatus } from '@/redux/types/common';

const MenageRegistration = () => {
  const { data: groups } = useGetAllGroupsQuery({});
  const { data: registerStatus } = useGetRegisterStatusQuery();
  const [setRegisterStatus] = useSetRegisterStatusMutation();
  const isAnyGroups = useMemo(() => groups?.length === 0, [groups]);

  return (
    <Container>
      <Typography variant="h2" mt={2} mb={4}>
        Manager zapisów
      </Typography>
      <Stack maxWidth="400px">
        <Typography
          mb={5}
          variant="subtitle1">{`1. Utworzenie grup będzie równoznaczne z rozpoczęciem zapisów. Raz utworzone grupy nie będą mogły zostać zmienione.`}</Typography>
        <AddGroupsModal disabled={registerStatus && registerStatus !== RegisterStatus.NO_GROUPS} />
        <Divider sx={{ my: 2 }} />
        <Typography
          mb={5}
          variant={
            isAnyGroups ? 'subtitle1' : 'body1'
          }>{`2. Zakończenie zapisów spowoduje brak możliwość zapisu zawodnika za pośrednictwem aplikacji. Po zamknięciu zapisów jako administrator będziesz mógł dodać zawodnika, usunąć go lub zmienić mu grupę.`}</Typography>
        <Button
          color="error"
          disabled={registerStatus && registerStatus !== RegisterStatus.USERS_REGISTER}
          onClick={() => setRegisterStatus(RegisterStatus.ADMIN_REGISTER)}>
          Zakończ zapisy
        </Button>
        <Divider sx={{ my: 2 }} />
        <Typography
          mb={5}
          variant="subtitle1">{`3. Zatwierdź wprowadzone zmiany, Po zatwierdzeniu nie będziesz mógł wprowadzać zmian w zawodnikach i grupach.`}</Typography>
        <Button
          color="error"
          disabled={registerStatus && registerStatus !== RegisterStatus.ADMIN_REGISTER}
          onClick={() => setRegisterStatus(RegisterStatus.CLOSED)}>
          Zatwierdź grupy
        </Button>
      </Stack>
    </Container>
  );
};

export default MenageRegistration;
