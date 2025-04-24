import React, { useState, useRef, useEffect } from "react";

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
      <button
        onClick={playPause}
        className="text-white bg-cyan-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
}
