import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: ['Poppins'].join(', '),
    h1: {
      fontSize: '3.5rem',
      fontWeight: '600'
    },
    h2: {
      fontSize: '2rem',
      fontWeight: '600'
    },
    subtitle1: {
      color: 'GrayText'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          textTransform: 'capitalize',
          letterSpacing: '1px',
          width: 'fit-content',
          padding: '12px 30px'
        }
      }
    },
    MuiFab: {
      styleOverrides: {
        root: {
          borderRadius: '8px'
        }
      }
    }
  }
});

export default theme;
