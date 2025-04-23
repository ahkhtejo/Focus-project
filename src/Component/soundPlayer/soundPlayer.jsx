import React from "react";
import sound from "../../assets/sound/nature-ambience-323729.mp3";
export default function soundPlayer() {
  const audio = new Audio(sound);
  return (
    <>
      <div>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => {
            audio.load = true;
            audio.play();
          }}
        >
          play
        </button>
        <br />
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => {
            audio.load = false;
          }}
        >
          Pause
        </button>
      </div>
    </>
  );
}
