import React, { useEffect, useMemo, useState } from "react";
import Container from "@material-ui/core/Container";
import { useDispatch, useSelector } from "react-redux";
import { Paper } from "@material-ui/core";
import YouTube, { Options, PlayerVars } from "react-youtube";
import { useParams } from "react-router";
import { setLastVideoTime } from "../../core/actionCreators/favoriteListActions";

export default function WatchVideo() {
  const dispatch = useDispatch();
 
  const [isPlayed, setPlayed] = useState(false);
  const [player, setPlayer] = React.useState<any>(null);

  const [lastPlayingTime, setLastPlayingTime] = useState(0);
  const [playBackTime, setPlayBackTime] = useState<Number>(0);

  const { videoId } = useParams<{ videoId: string }>();

  const lastPlaybackTime = useSelector(
    (state: any) => state.root?.videoPlaybackHistory?.playback?.[videoId]
  );
  const lastPlayed = useSelector(
    (state: any) => state.root?.videoPlaybackHistory?.lastPlayed?.[videoId]
  );

  useEffect(() => {
    return () => {
      dispatch(
        setLastVideoTime({
          videoId,
          lastPlayedTime: new Date().getTime(),
          lastPlayed: lastPlayingTime,
        })
      );
    };
  }, [lastPlayingTime]);

  const opts = useMemo(() => {
    return {
      height: "390",
      width: "100%",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        start: playBackTime,
      } as PlayerVars,
    } as Options;
  }, [playBackTime]);

  const onReady = (event: any) => {
    setPlayer(event.target);
   
  };

  const onPlayVideo = () => {
   
    setLastPlayingTime(player.getCurrentTime());
    
    if (lastPlaybackTime && isPlayed === false) {
      setPlayed(true);
     
      const diff = (new Date().getTime() - (lastPlaybackTime || 0)) / 1000;

      if (lastPlayed) {
        setPlayBackTime(Math.floor(lastPlayed + diff));
       
      }
    }
  };

  const onPauseVideo = () => {
    player.pauseVideo();
  };
 
  return (
    <React.Fragment>
      <Container fixed>
        <Paper square elevation={0}>
          {videoId && (
            <YouTube
              videoId={videoId}
              opts={opts}
              onPause={onPauseVideo}
              onReady={onReady}
              onPlay={onPlayVideo}
            />
          )}
        </Paper>
      </Container>
    </React.Fragment>
  );
}
