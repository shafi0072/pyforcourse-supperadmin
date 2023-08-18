import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#6200ea',
    },
    // other color definitions
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export { lightTheme, darkTheme };