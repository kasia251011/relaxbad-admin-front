import { ThemeProvider } from '@mui/material';
import { JSX } from 'react';

import theme from './theme';

interface AppThemeProviderProps {
  children: JSX.Element | JSX.Element[];
}

const AppThemeProvider = ({ children }: AppThemeProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppThemeProvider;
