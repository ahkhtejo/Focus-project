import React, { useState, useRef } from "react";
import sound from "../../assets/sound/nature-ambience-323729.mp3";

export default function SoundPlayer() {
  const audioRef = useRef(new Audio(sound));
  const [isPlaying, setIsPlaying] = useState(false);

  const playPause = () => {
    const audio = audioRef.current;
    if (!isPlaying) {
      audio.loop = false;
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  // const stopAudio = () => {
  //   const audio = audioRef.current;
  //   audio.pause();
  //   audio.currentTime = 0; // Reset to beginning
  //   setIsPlaying(false);
  // };

  return (
    <div>
      <button
        onClick={playPause}
        className="text-white bg-cyan-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
}
