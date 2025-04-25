/**
 * Store Itemn in local storage on the brwser
 * @param {any} param0
 */
export function StoreItem({ item }) {
  const lastiteminstor = GetItemFromStorage();
  if (!lastiteminstor) {
    //console.log(`no item in stor  ${lastiteminstor} the in item is ${item}`);
    localStorage.setItem("foucs-localstorig", item);
  } else {
    //console.log(` update the item in stor ofmr ${lastiteminstor} to ${item}`);
    localStorage.setItem("foucs-localstorig", item);
  }
}
/**
 * get the items that stored in the local storage
 * @returns {Object}
 */
export function GetItemFromStorage() {
  return localStorage.getItem("foucs-localstorig");
}
