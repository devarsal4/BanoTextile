// VideoPlayer.js
import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components"; // Import styled-components

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const VideoPlayer = () => {
    return (
      <VideoContainer>
        <ReactPlayer
          url="/videos/textile.mp4" // Update the path to your video file
          playing={true}
          loop={true}
          muted={true}
          width="100%"
          height="100%"
        />
      </VideoContainer>
    );
  };

export default VideoPlayer;
