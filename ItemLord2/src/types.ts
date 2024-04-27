import {
  addCash,
  addItemToMarket,
  addItemToPocket,
  removeItemFromMarket,
  removeItemFromPocket,
  selectItem,
  setInputValue,
  setTradeType,
  stayDay,
  toggleMarket,
  toggleOverlay,
  updateMarket,
} from "./redux/actions";

export type Item = {
  name: string;
  qty: number;
  price: number;
};

export type Notification = {
  color: string;
  text: string;
};

export type ActionType =
  | ReturnType<typeof addCash>
  | ReturnType<typeof addItemToPocket>
  | ReturnType<typeof addItemToMarket>
  | ReturnType<typeof removeItemFromMarket>
  | ReturnType<typeof removeItemFromPocket>
  | ReturnType<typeof selectItem>
  | ReturnType<typeof setInputValue>
  | ReturnType<typeof setTradeType>
  | ReturnType<typeof stayDay>
  | ReturnType<typeof toggleMarket>
  | ReturnType<typeof toggleOverlay>
  | ReturnType<typeof updateMarket>;
