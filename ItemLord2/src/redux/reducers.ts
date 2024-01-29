import { Item } from "../types";
import { initPocket, generateItemsForSale } from "../utils";
import {
  ADD_CASH,
  REMOVE_ITEM_FROM_POCKET,
  SELECT_ITEM,
  SET_INPUT_VALUE,
  SET_TRADE_TYPE,
  STAY_DAY,
  TOGGLE_OVERLAY,
  UPDATE_POCKET,
} from "./ActionTypes";
import {
  addCash,
  selectItem,
  setInputValue,
  setTradeType,
  stayDay,
  toggleOverlay,
  updatePocket,
  removeItemFromPocket,
} from "./actions";

type ActionType =
  | ReturnType<typeof stayDay>
  | ReturnType<typeof addCash>
  | ReturnType<typeof updatePocket>
  | ReturnType<typeof selectItem>
  | ReturnType<typeof toggleOverlay>
  | ReturnType<typeof setTradeType>
  | ReturnType<typeof setInputValue>
  | ReturnType<typeof removeItemFromPocket>;

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
  pocket: Item[]; // Assuming Item is a type you have defined
  market: {
    forSale: Item[];
    yesterdaysForSale: Item[]; // Assuming Item is a type you have defined
  };
  selectedItem: Item;
  tradeType: string;
  pocketSize: number;
  isOverlayOpen: boolean;
  inputValue: number;
}

interface SearchItem {
  name: string;
  qty: number;
}

// reducers.js
const initialState: AppState = {
  stats: {
    location: "Toronto",
    health: 100,
    day: 1,
    lastDay: 30,
    rank: "Wannabe",
    cash: 1500,
    bank: 0,
    debt: 1000,
  },
  pocket: initPocket(),
  market: {
    forSale: generateItemsForSale(),
    yesterdaysForSale: [],
  },
  selectedItem: {
    name: "",
    qty: 0,
    price: 0,
  },
  tradeType: "",
  pocketSize: 20,
  isOverlayOpen: false,
  inputValue: 0,
};

function removeQty(arr: Item[], searchItem: SearchItem): Item[] {
  const updatedArray = arr.map((item) => {
    if (item.name === searchItem.name) {
      const updatedPocket = item.qty - searchItem.qty;
      return {
        ...item,
        qty: updatedPocket >= 0 ? updatedPocket : 0,
      };
    }
    return item;
  });

  return updatedArray.filter((item) => item.qty > 0);
}

const reducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case STAY_DAY:
      return {
        ...state,
        stats: { ...state.stats, day: ++state.stats.day },
      };
    case ADD_CASH:
      return {
        ...state,
        stats: { ...state.stats, cash: state.stats.cash + action.payload },
      };
    case REMOVE_ITEM_FROM_POCKET:
      return {
        ...state,
        pocket: removeQty(state.pocket, action.payload),
      };
    case UPDATE_POCKET:
      return {
        ...state,
        pocket: action.payload,
      };
    case SELECT_ITEM:
      return {
        ...state,
        selectedItem: action.payload,
      };
    case TOGGLE_OVERLAY:
      return {
        ...state,
        isOverlayOpen: !state.isOverlayOpen,
      };
    case SET_TRADE_TYPE:
      return {
        ...state,
        tradeType: action.payload,
      };
    case SET_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
