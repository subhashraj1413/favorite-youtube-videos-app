import {
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      marginBottom: theme.spacing(2),
    },
    title: {
      width: 150,
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
    },
    details: {
      display: "flex",
      flexDirection: "column",
      width: "60%",
    },
    content: {
      flex: "1 0 auto",
    },
    cover: {
      width: "40%",
      margin: 10,
    },
    controls: {
      display: "flex",
      alignItems: "center",
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  })
);
interface VideoListCardProps {
  title: string;
  authorName: string;
  thumbnailUrl: string;
  onPlayVideo(): void;
  onDelete(): void;
}

export default function VideoListCard(props: VideoListCardProps) {
  const { title, authorName, thumbnailUrl, onPlayVideo, onDelete } = props;
  const classes = useStyles();
  

  return (
    <Card className={classes.root} raised>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5" className={classes.title}>
            {title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {authorName}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton color="secondary" aria-label="play/pause" onClick={onPlayVideo}>
            <PlayArrowIcon className={classes.playIcon} />
          </IconButton>
          <IconButton aria-label="next" onClick={onDelete}>
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
      <CardMedia className={classes.cover} image={thumbnailUrl} title={title} />
    </Card>
  );
}
