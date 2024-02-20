import { Item } from "./types";

export interface ItemTableProps {
  items: Item[];
  tradeType: string;
  title: string;
  size: "small" | "medium";
  ariaLabel: string;
}

export interface AppState {
  stats: {
    location: string;
    health: number;
    day: number;
    lastDay: number;
    rank: string;
    cash: number;
    bank: number;
    debt: number;
  };
  pocket: Item[];
  market: {
    forSale: Item[];
    yesterdaysForSale: Item[];
  };
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
