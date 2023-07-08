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
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiDivider: {
      styleOverrides: {
        vertical: {
          marginRight: 10,
          marginLeft: 10,
        },
        // TODO: open issue for missing "horizontal" CSS rule
        // in Divider API - https://mui.com/material-ui/api/divider/#css
        middle: {
          marginTop: 10,
          marginBottom: 10,
          width: '80%',
        },
      },
    },
  },
}

export default mainTheme;
