import './style.scss';
import { Box, Divider, Stack, Typography } from '@mui/material';

import NavExpandButton from './NavExpandButton';
import NavMainButton from './NavMainButton';
import NavSecondaryButton from './NavSecondaryButton';

import Logo from '../Logo';
import { useGetAllGroupsQuery } from '@/redux/api/groupApi';
import PATH from '@/routes/urls';
import COLOR from '@/themes/colors';

const SideNav = () => {
  const { data: groups } = useGetAllGroupsQuery({});

  return (
    <Stack
      className="side-nav-bar"
      bgcolor={COLOR.LIGHT_GREY_BACKGROUND}
      boxSizing="border-box"
      justifyContent="space-between">
      <Stack>
        <Box ml={3} mb={3}>
          <Logo />
        </Box>
        <Typography color={COLOR.LIGHT_GREY_TEXT} fontSize=".7rem" ml={3} mb={1}>
          Trwająca Liga 2023/2024
        </Typography>
        <Divider />
        <Stack paddingTop={3} mx={1}>
          <NavMainButton to={PATH.GAMES_SCHEDULE} label="Terminarz" />
          <NavExpandButton label="Grupy">
            {groups && groups.length > 0 && (
              <>
                <NavMainButton to={PATH.SINGLES} label="Single" />
                <NavMainButton to={PATH.DOUBLES} label="Deble" />
                <NavMainButton to={PATH.MIXES} label="Mixty" />
              </>
            )}
            <NavMainButton to={PATH.MENAGE_REGISTRATION} label="Menager Zapisów" />
          </NavExpandButton>
          <NavMainButton to={PATH.RANKINGS} label="Rankingi" />
        </Stack>
      </Stack>
      <Stack>
        <Typography color={COLOR.LIGHT_GREY_TEXT} fontSize=".7rem" ml={3} mb={1}>
          Zarządzanie kontami
        </Typography>
        <Divider />
        <Stack pt={1} mx={1} mb={3}>
          <NavSecondaryButton to={PATH.USERS} label="Użytkownicy" />
          <NavSecondaryButton to={PATH.MY_ACCOUNT} label="Moje Konto" />
          <Typography
            className="navLink"
            style={{
              color: COLOR.LIGHT_GREY_TEXT,
              padding: '10px 20px'
            }}>
            Wyloguj się
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SideNav;
