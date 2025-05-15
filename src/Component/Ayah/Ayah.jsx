import React, { useEffect, useState } from "react";
import SoundPlayer from "../soundPlayer/soundPlayer";
import { StoreItem, GetItemFromStorage } from "../../utils/db/localStorig";
import { GetAyahSoundURL, GetAyahAR, GetAyahEN } from "../../utils/api/https";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import next from "../../assets/icon/next.svg";
import back from "../../assets/icon/back.svg";

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

        <p className=" mt-6 text-[16px] text-gray-300">
          {isLoading ? "Loading..." : ayahEN?.text || "No Ayah found"}
        </p>
      </div>
      <div className="flex items-center justify-center space-x-4 mt-4">
        <button
          onClick={GetNextAyha}
          className="text-white bg-cyan-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        >
          <img className="size-6" src={back} alt="Back" />
        </button>

        <div className="text-white bg-cyan-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
          <SoundPlayer sound={sound} />
        </div>

        <button
          onClick={GetPreviousAyha}
          className="text-white bg-cyan-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        >
          <img className="size-6" src={next} alt="Next" />
        </button>
      </div>
    </>
  );
}

export default Ayah;
