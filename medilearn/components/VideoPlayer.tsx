import React from "react";
import styles from "./VideoPlayer.module.css";

type VideoPlayerProps = {
  url: string;
};

const VideoPlayer = ({ url }: VideoPlayerProps) => {
  return (
    <div className={styles.playerWrapper}>
      <iframe
        src={url}
        className={styles.reactPlayer}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default VideoPlayer;