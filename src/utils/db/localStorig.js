export function StoreItem({ item }) {
  console.log("StoreItem", item);
  localStorage.setItem("foucs-localstorig", item);
}

export function GetItemFromStore() {
  return localStorage.getItem("foucs-localstorig");
}
