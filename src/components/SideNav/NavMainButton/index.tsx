import { To, NavLink } from 'react-router-dom';

import COLOR from '@/themes/colors';
import theme from '@/themes/theme';
interface NavButtonProps {
  to: To;
  label: string;
}

const NavMainButton = ({ label, to }: NavButtonProps) => {
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

export default NavMainButton;
