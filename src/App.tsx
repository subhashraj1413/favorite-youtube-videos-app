import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./components/header";
import { Box, Container, Paper } from "@material-ui/core";
import {
  Theme,
  createStyles,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { theme } from "./core/theme";
import configureStore from "./core/store/configureStore";

import Home from "./features/home";
import WatchVideo from "./features/watchVideo";
import Footer from "./components/footer";
import * as Routes from "./core/Routes";

const store = configureStore();

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: "#FFF",
      minHeight: 700,
    },
    paper: {
      paddingBottom: 50,
      minHeight: "calc(100vh - 120px)",
      padding: theme.spacing(6, 3, 6, 3),
      background: " #ebf6ff",
    },
  })
);

function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Router>
            <CssBaseline />
            <Container maxWidth="sm" disableGutters>
              <Box className={classes.root}>
                <Header />
                <Paper elevation={0} square className={classes.paper}>
                  <Switch>
                    <Route exact path={Routes.HOME_PAGE}>
                      <Home />
                    </Route>
                    <Route exact path={Routes.WATCH_VIDEO}>
                      <WatchVideo />
                    </Route>
                  </Switch>
                </Paper>
                <Footer />
              </Box>
            </Container>
          </Router>
        </Provider>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
