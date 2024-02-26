import { Item } from "./types";

export interface AppState {
  stats: userInfoState;
  pocket: Item[];
  market: marketState;
  selectedItem: Item;
  tradeType: string;
  pocketSize: number;
  isOverlayOpen: boolean;
  inputValue: number;
}

export interface SearchItem {
  name: string;
  qty: number;
}

export interface userInfoState {
  location: string;
  health: number;
  day: number;
  lastDay: number;
  rank: string;
  cash: number;
  bank: number;
  debt: number;
}

export interface marketState {
  forSale: Item[];
  yesterdaysForSale: Item[];
}

export interface ItemTableProps {
  items: Item[];
  tradeType: string;
  title: string;
  size: "small" | "medium";
  ariaLabel: string;
}
