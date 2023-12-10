import { createTheme } from '@mui/material';

import COLOR from './colors';

const theme = createTheme({
  typography: {
    fontFamily: ['Poppins'].join(', '),
    fontSize: 11,
    h1: {
      fontSize: '3.5rem',
      fontWeight: '600'
    },
    h2: {
      fontSize: '2rem',
      fontWeight: '600'
    },
    h3: {
      fontSize: '1rem',
      fontWeight: '600'
    },
    subtitle1: {
      color: 'GrayText'
    },
    subtitle2: {
      fontSize: 10,
      color: 'GrayText',
      fontWeight: 'normal'
    }
  },
  palette: {
    primary: {
      main: COLOR.PRIMARY,
      dark: COLOR.PRIMARY_DARK
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '7px',
          textTransform: 'capitalize',
          letterSpacing: '1px',
          width: 'fit-content',
          height: 'fit-content'
        }
      }
    },
    MuiTextField: {
      defaultProps: {
        inputProps: {
          style: {
            fontSize: '0.8rem'
          }
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '0.8rem'
        }
      }
    }
  }
});

export default theme;
