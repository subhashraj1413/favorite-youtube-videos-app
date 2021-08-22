import { makeStyles, createStyles,  Theme } from "@material-ui/core";



export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
   
    
    text: {
      fontWeight: "bold",
      marginBottom: theme.spacing(2)
    },
    list: {
      marginBottom: theme.spacing(2),
    },
    subheader: {
      backgroundColor: theme.palette.background.paper,
    },
    appBar: {
      top: "auto",
      bottom: 0,
    },
    grow: {
      flexGrow: 1,
    },
    fabButton: {
      position: "absolute",
      zIndex: 1,
      top: -30,
      left: 0,
      right: 0,
      margin: "0 auto",
    },
  })
);
