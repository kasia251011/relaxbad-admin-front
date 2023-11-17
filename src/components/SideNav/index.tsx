import './style.scss';
import { Box, Divider, Stack, Typography } from '@mui/material';
import { NavLink, To } from 'react-router-dom';

import Logo from '../Logo';
import PATH from '@/routes/urls';
import COLOR from '@/themes/colors';
import theme from '@/themes/theme';

interface NavButtonProps {
  to: To;
  label: string;
}

const NavButton = ({ label, to }: NavButtonProps) => {
  return (
    <NavLink
      to={to}
      className="navLink"
      style={({ isActive }) => {
        return {
          color: isActive ? 'white' : COLOR.PRIMARY,
          backgroundColor: isActive ? COLOR.PRIMARY : 'transparent',
          padding: '10px 20px',
          borderRadius: 5,
          fontSize: '0.8rem',
          fontFamily: theme.typography.fontFamily
        };
      }}>
      {label}
    </NavLink>
  );
};

const SideNav = () => {
  return (
    <Stack className="side-nav-bar" bgcolor={COLOR.LIGHT_GREY_BACKGROUND}>
      <Box ml={3} mb={3}>
        <Logo />
      </Box>
      <Typography color={COLOR.LIGHT_GREY_TEXT} fontSize=".7rem" ml={3} mb={1}>
        Trwająca Liga 2023/2024
      </Typography>
      <Divider />
      <Stack paddingTop={3} mx={1}>
        <NavButton to={PATH.GAMES_SCHEDULE} label="Terminarz" />
        <NavButton to={PATH.PLAYERS} label="Zawodnicy" />
        <NavButton to={PATH.RANKINGS} label="Rankingi" />
      </Stack>
    </Stack>
  );
};

export default SideNav;
