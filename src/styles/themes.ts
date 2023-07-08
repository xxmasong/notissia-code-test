import { ThemeOptions } from '@mui/material/styles';

const mainTheme: ThemeOptions = {
  palette: {
    background: {
      default: '#eff3f2',
      paper: '#fff',
    },
    primary: {
      main: '#3f51b5',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Century Gothic"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  }
}

export default mainTheme;
