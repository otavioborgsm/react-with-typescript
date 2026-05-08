import React from "react";
import videoSrc from "../../assets/videos/video.mp4";
import useLocalStorage from "./useLocalStorage";

const CustomHook = () => {
  const video = React.useRef<HTMLVideoElement>(null);
  const [volume, setVolume] = useLocalStorage("volume", "0");

  React.useEffect(() => {
    if (!video.current) return;

    const newVolume = +volume;

    if (newVolume >= 0 && newVolume <= 1) video.current.volume = newVolume;
  }, [volume]);

  return (
    <div>
      <h2>Custom Hook</h2>
      {volume}
      <div className="flex">
        <button onClick={() => setVolume("0")}>0</button>
        <button onClick={() => setVolume("0.50")}>50</button>
        <button onClick={() => setVolume("1")}>100</button>
      </div>
      <video controls ref={video} src={videoSrc}></video>
    </div>
  );
};

export default CustomHook;
