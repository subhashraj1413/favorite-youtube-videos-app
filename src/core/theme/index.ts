import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  typography:{
    fontFamily: "'Roboto', sans-serif",

  },
  palette: {
    primary: {
      light: '#2BADFB',
      main: '#099AF0',
      dark: '#099AF0',
      contrastText: '#fff',
    },
    // secondary: {
    //   light: '#E38BEB',
    //   main: '#E28BEB',
    //   dark: '#E45DF0',
    //   contrastText: '#000',
    // },
  },
});
