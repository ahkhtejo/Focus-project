import axios from "axios";
export async function GetAyahAR(id) {
  const response = await axios.get(
    `https://api.alquran.cloud/v1/ayah/${id}/ar.asad`
  );
  return response.data.data; // this will return just the Ayah object
}

/**
 * the aim of this function is to get the sound URL https//examp.mp3
 * @param {Number} Id
 * @returns {String}
 */
export function GetAyahSoundURL(Id) {
  const response = `https://cdn.islamic.network/quran/audio/64/ar.alafasy/${Id}.mp3`;
  return response;
}
/**
 * the aim of the is function is to get the EN test of ayah by ID
 * @param {Number} id
 * @returns {object}
 */
export async function GetAyahEN(id) {
  const response = await axios.get(
    `https://api.alquran.cloud/v1/ayah/${id}/en.asad`
  );
  return response.data.data; // this will return just the Ayah object
}
