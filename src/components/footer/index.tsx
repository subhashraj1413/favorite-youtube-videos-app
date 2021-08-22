import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Fab from "@material-ui/core/Fab";
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import { useHistory } from "react-router";
import AddVideoFormModal from "../../components/addVideoFormModal";

import { useStyles } from "./styles";
import { useLocation } from "react-router-dom";
import { HOME_PAGE } from "../../core/Routes";

export default function Footer() {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  
  const handleOpenVideoForm = () => {
    setOpenModal(true);
  };

  const rootRef = React.useRef<HTMLDivElement>(null);

  return (
    <React.Fragment>
      <CssBaseline />

      <AppBar position="sticky" color="primary" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={()=> history.push({
            pathname: HOME_PAGE
          })}>
            <HomeIcon />
          </IconButton>
          {location.pathname === HOME_PAGE && (
            <Fab
              color="secondary"
              aria-label="add"
              onClick={() => {
                handleOpenVideoForm();
              }}
              className={classes.fabButton}
            >
              <AddIcon />
            </Fab>
          )}

          <div className={classes.grow} />
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton edge="end" color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <AddVideoFormModal
        rootRef={rootRef}
        onClose={() => setOpenModal(false)}
        openModal={openModal}
      />
    </React.Fragment>
  );
}
