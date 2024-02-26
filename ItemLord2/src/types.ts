import {
  addCash,
  selectItem,
  setInputValue,
  setTradeType,
  stayDay,
  toggleOverlay,
  updateMarket,
  removeItemFromPocket,
  removeItemFromMarket,
  addItemToPocket,
  addItemToMarket,
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
  | ReturnType<typeof stayDay>
  | ReturnType<typeof addCash>
  | ReturnType<typeof updateMarket>
  | ReturnType<typeof selectItem>
  | ReturnType<typeof toggleOverlay>
  | ReturnType<typeof setTradeType>
  | ReturnType<typeof setInputValue>
  | ReturnType<typeof removeItemFromPocket>
  | ReturnType<typeof removeItemFromMarket>
  | ReturnType<typeof addItemToPocket>
  | ReturnType<typeof addItemToMarket>;
