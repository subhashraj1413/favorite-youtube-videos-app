import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      borderRadius: 0,
      border: 0,
      color: "white",
      height: 64,
    },
    topAppBar: {
      background: "linear-gradient(45deg, #EBF7FF 30%, #E181EA 90%)",
      boxShadow:
        "0px 2px 4px -1px rgb(233 230 251), 0px 4px 5px 0px rgb(235 246 255), 0px 1px 10px 0px rgb(0 0 0 / 18%)",
      height: 74,
      display: "flex",
      justifyContent: "center",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    logoImage: {
      width: 100,
    },
  })
);
