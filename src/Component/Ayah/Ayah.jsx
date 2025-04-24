import axios from "axios";
import React, { useEffect, useState } from "react";
import SoundPlayer from "../soundPlayer/soundPlayer";
import { StoreItem, GetItemFromStore } from "../../utils/db/localStorig";
//TODO : store the ayah in the local storge for the users
//TODO : store the task list
async function GetAyahAR(id) {
  const response = await axios.get(
    `https://api.alquran.cloud/v1/ayah/${id}/ar.asad`
  );
  return response.data.data; // this will return just the Ayah object
}

function GetAyahSound(Id) {
  const response = `https://cdn.islamic.network/quran/audio/64/ar.alafasy/${Id}.mp3`;
  return response;
}

async function GetAyahEN(id) {
  const response = await axios.get(
    `https://api.alquran.cloud/v1/ayah/${id}/en.asad`
  );
  return response.data.data; // this will return just the Ayah object
}

function Ayah() {
  const [isLoading, setIsLoading] = useState(true);
  const [ayahNo, setayahNo] = useState(1);
  const [ayah, setAyah] = useState(null);
  const [ayahEN, setAyahEN] = useState(null);
  const [sound, setsound] = useState("");

  function GetNextAyha() {
    console.log("ayahNo is", ayahNo);
    setayahNo(ayahNo + 1);
  }

  function GetPreviousAyha() {
    console.log("ayahNo is", ayahNo);
    setayahNo(ayahNo - 1);
  }

  useEffect(() => {
    async function fetchAyah() {
      setIsLoading(true);

      const dataAR = await GetAyahAR(ayahNo);
      const dateEN = await GetAyahEN(ayahNo);
      const ayahsound = GetAyahSound(ayahNo);
      setAyah(dataAR);
      setAyahEN(dateEN);
      setsound(ayahsound);
      //StoreItem({ item: ayahNo });
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
