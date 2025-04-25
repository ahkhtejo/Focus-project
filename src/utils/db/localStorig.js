export function StoreItem({ item }) {
  const lastiteminstor = GetItemFromStore();
  if (!lastiteminstor) {
    console.log(`no item in stor  ${lastiteminstor} the in item is ${item}`);
    localStorage.setItem("foucs-localstorig", item);
  } else {
    console.log(` update the item in stor ofmr ${lastiteminstor} to ${item}`);
    localStorage.setItem("foucs-localstorig", item);
  }
}

export function GetItemFromStore() {
  return localStorage.getItem("foucs-localstorig");
}
