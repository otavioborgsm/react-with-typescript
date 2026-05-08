import React from "react";
import videoSrc from "../../assets/videos/video.mp4";

const UseRefExercise = () => {
  const video = React.useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [hasSound, setHasSound] = React.useState(true);

  function handleBtnPlayVideo(): void {
    if (!video.current) return;
    isPlaying ? video.current.pause() : video.current.play();
  }

  function handleTwoSecondsPlusBtn(): void {
    if (!video.current) return;
    video.current.currentTime += 2;
  }

  function changePlaybackRate(speed: number) {
    if (!video.current) return;
    video.current.playbackRate = speed;
  }

  function handleMute(): void {
    if (!video.current) return;
    video.current.muted = !video.current.muted;
  }

  function handleVolumeChange(): void {
    if (!video.current) return;
    if (video.current.muted) {
      setHasSound(false);
      return;
    }
    setHasSound(true);
  }

  async function pictureInPicture() {
    if (!video.current) return;
    if (document.pictureInPictureElement) {
      await document.exitPictureInPicture();
    } else {
      await video.current.requestPictureInPicture();
    }
  }

  return (
    <div>
      <h2>UseRef Exercise:</h2>
      <div className="flex">
        <button onClick={handleBtnPlayVideo}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button onClick={handleTwoSecondsPlusBtn}>+ 2s</button>
        <button onClick={() => changePlaybackRate(1)}>1x</button>
        <button onClick={() => changePlaybackRate(2)}>2x</button>
        <button onClick={pictureInPicture}>PiP</button>
        <button onClick={handleMute}>{hasSound ? "Mute" : "Unmute"}</button>
      </div>
      <video
        controls
        ref={video}
        src={videoSrc}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onVolumeChange={handleVolumeChange}
      />
    </div>
  );
};

export default UseRefExercise;
