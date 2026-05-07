import React from "react";
import videoSrc from "../../assets/videos/video.mp4";

const UseRef = () => {
  const video = React.useRef<HTMLVideoElement>(null);

  return (
    <div>
      <h2>UseRef</h2>
      <div className="flex">
        <button onClick={() => video.current?.play()}>Play</button>
        <button onClick={() => video.current?.pause()}>Pause</button>
      </div>
      <video controls ref={video} src={videoSrc}></video>
    </div>
  );
};

export default UseRef;
