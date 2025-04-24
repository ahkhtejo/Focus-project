import axios from "axios";
import React, { useEffect, useState } from "react";

async function GetAyahAR(id) {
  const response = await axios.get(
    `https://api.alquran.cloud/v1/ayah/${id}/ar.asad`
  );
  return response.data.data; // this will return just the Ayah object
}

async function GetAyahEN(id) {
  const response = await axios.get(
    `https://api.alquran.cloud/v1/ayah/${id}/en.asad`
  );
  return response.data.data; // this will return just the Ayah object
}

// function GetNextAyha() {}

function Ayah() {
  const [isLoading, setIsLoading] = useState(true);
  //   const [ayahNo, setayahNo] = useState(1);
  const [ayah, setAyah] = useState(null);
  const [ayahEN, setAyahEN] = useState(null);

  useEffect(() => {
    async function fetchAyah() {
      setIsLoading(true);
      const dataAR = await GetAyahAR(8);
      const dateEN = await GetAyahEN(8);
      setAyah(dataAR);
      setAyahEN(dateEN);
      setIsLoading(false);
    }

    fetchAyah();
  }, []);

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
        {isLoading ? "Loading..." : ayahEN?.text || "No Ayah found"}
      </div>
    </>
  );
}

export default Ayah;
