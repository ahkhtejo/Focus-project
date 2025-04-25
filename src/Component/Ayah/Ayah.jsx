import React, { useEffect, useState } from "react";
import SoundPlayer from "../soundPlayer/soundPlayer";
import { StoreItem, GetItemFromStorage } from "../../utils/db/localStorig";
import { GetAyahSoundURL, GetAyahAR, GetAyahEN } from "../../utils/api/https";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Ayah() {
  const [isLoading, setIsLoading] = useState(true);

  const [ayahNo, setayahNo] = useState(() => {
    const saved = GetItemFromStorage();
    return saved ? Number(saved) : 1;
  });

  const [ayah, setAyah] = useState(null);
  const [ayahEN, setAyahEN] = useState(null);
  const [sound, setsound] = useState("");

  function GetNextAyha() {
    setayahNo(ayahNo + 1);
  }

  function GetPreviousAyha() {
    setayahNo(ayahNo - 1);
  }

  useEffect(() => {
    async function fetchAyah() {
      setIsLoading(true);
      const dataAR = await GetAyahAR(ayahNo);
      const dateEN = await GetAyahEN(ayahNo);
      const ayahsound = GetAyahSoundURL(ayahNo);
      setAyah(dataAR);
      setAyahEN(dateEN);
      setsound(ayahsound);

      StoreItem({ item: ayahNo });

      setIsLoading(false);
    }

    fetchAyah();
  }, [ayahNo]);

  return (
    <>
      <div className="text-[15px]">
        <p className=" mt-2 text-[15px]">
          {isLoading ? "Loading..." : ayah?.surah.name || "No Ayah found"}
        </p>
        <p className=" mt-6 text-3xl">
          {isLoading ? "Loading..." : ayah?.text || "No Ayah found"}
        </p>
        <br />
        <SoundPlayer sound={sound} />
        <p className=" mt-6 text-[10px] text-gray-400">
          {isLoading ? "Loading..." : ayahEN?.text || "No Ayah found"}
        </p>
      </div>
      <button
        onClick={GetNextAyha}
        className="text-white bg-cyan-800 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
      >
        Next
      </button>
      {/* <FontAwesomeIcon
        icon="fa-solid fa-circle-chevron-right"
        beatFade
        style={{ color: "#63E6BE" }}
      /> */}
      {/* <FontAwesomeIcon icon={faBookQuran} beatFade /> */}
      <button
        onClick={GetPreviousAyha}
        className="text-white bg-cyan-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
      >
        Back
      </button>
    </>
  );
}

export default Ayah;
