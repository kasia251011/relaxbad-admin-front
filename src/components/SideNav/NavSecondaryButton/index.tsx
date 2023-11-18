import { To, NavLink } from 'react-router-dom';

import COLOR from '@/themes/colors';
import theme from '@/themes/theme';

interface NavButtonProps {
  to: To;
  label: string;
}

const NavSecondaryButton = ({ label, to }: NavButtonProps) => {
  return (
    <NavLink
      to={to}
      className="navLink"
      style={({ isActive }) => {
        return {
          color: isActive ? 'black' : COLOR.LIGHT_GREY_TEXT,
          padding: '10px 20px',
          fontSize: '0.8rem',
          fontFamily: theme.typography.fontFamily
        };
      }}>
      {label}
    </NavLink>
  );
};

export default NavSecondaryButton;
