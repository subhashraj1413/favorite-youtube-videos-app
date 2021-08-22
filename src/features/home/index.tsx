import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import AppBackdrop from "../../components/appBackdrop";
import { useStyles } from "./styles";
import { useHistory } from "react-router";
import VideoListCard from "../../components/videoListCard";
import { WATCH_VIDEO } from "../../core/Routes";
import { deleteFavoriteListItem } from "../../core/actionCreators/favoriteListActions";

export default function Home() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const favoriteListData: any = useSelector(
    (state: any) => state.root.favoriteList
  );

  const { loading, response: favoriteListItems } = favoriteListData;

  const onDeleteItem = (videoId: string) => {
    dispatch(
      deleteFavoriteListItem({
        videoId,
      })
    );
  };
  if (loading) {
    return <AppBackdrop open={true} />;
  }

  return (
    <React.Fragment>
      <CssBaseline />

      <Typography className={classes.text} variant="h5" gutterBottom>
        My Favorite List
      </Typography>

      {favoriteListItems &&
        favoriteListItems.map(
          ({ videoId, videoUrl, title, thumbnail_url, author_name }: any) => (
            <React.Fragment key={videoId}>
              <VideoListCard
                title={title}
                authorName={author_name}
                thumbnailUrl={thumbnail_url}
                onPlayVideo={() => {
                  history.push({
                    pathname: WATCH_VIDEO.replace(":videoId", videoId),
                  });
                }}
                onDelete={() => onDeleteItem(videoId)}
              />
            </React.Fragment>
          )
        )}
    </React.Fragment>
  );
}
