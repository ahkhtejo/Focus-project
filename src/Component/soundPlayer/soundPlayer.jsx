import React, { useState, useRef, useEffect } from "react";
import play from "../../assets/icon/headset.svg";
import pause from "../../assets/icon/pause.svg";
export default function SoundPlayer({ sound }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Create the audio object after component mounts
    setIsPlaying(false);
    audioRef.current = new Audio(sound);
    audioRef.current.loop = false;

    return () => {
      // Clean up on unmount
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [sound]);

  const playPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!isPlaying) {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch((e) => {
          console.error("Error playing audio:", e);
        });
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div>
      <button onClick={playPause}>
        {isPlaying ? (
          <img className="size-6" src={pause} alt="Next" />
        ) : (
          <img className="size-6" src={play} alt="Next" />
        )}
      </button>
    </div>
  );
}
