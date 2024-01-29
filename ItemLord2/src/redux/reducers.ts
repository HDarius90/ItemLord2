import { Item } from "../types";
import { initPocket, generateItemsForSale } from "../utils";
import {
  ADD_CASH,
  REMOVE_ITEM_FROM_POCKET,
  REMOVE_ITEM_FROM_MARKET,
  ADD_ITEM_TO_POCKET,
  ADD_ITEM_TO_MARKET,
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
  removeItemFromMarket,
  addItemToPocket,
  addItemToMarket,
} from "./actions";

type ActionType =
  | ReturnType<typeof stayDay>
  | ReturnType<typeof addCash>
  | ReturnType<typeof updatePocket>
  | ReturnType<typeof selectItem>
  | ReturnType<typeof toggleOverlay>
  | ReturnType<typeof setTradeType>
  | ReturnType<typeof setInputValue>
  | ReturnType<typeof removeItemFromPocket>
  | ReturnType<typeof removeItemFromMarket>
  | ReturnType<typeof addItemToPocket>
  | ReturnType<typeof addItemToMarket>;

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

function removeFromPocket(arr: Item[], searchItem: SearchItem): Item[] {
  const updatedPocket = arr.map((item) => {
    if (item.name === searchItem.name) {
      const updatedQty = item.qty - searchItem.qty;
      return {
        ...item,
        qty: updatedQty >= 0 ? updatedQty : 0,
      };
    }
    return item;
  });

  return updatedPocket.filter((item) => item.qty > 0);
}

function removeFromMarket(arr: Item[], searchParams: SearchItem): Item[] {
  const updatedMarket = arr.map((item) => {
    if (item.name === searchParams.name) {
      return {
        ...item,
        qty: item.qty - searchParams.qty,
      };
    }
    return item;
  });

  return updatedMarket;
}

function updateOrAddItemToPocket(
  items: Item[],
  newItem: Item,
  qtyToAdd: number
): Item[] {
  const updatedItems = [...items];
  const index = updatedItems.findIndex((item) => item.name === newItem.name);

  if (index !== -1) {
    // If item with the same name exists, update its qty
    updatedItems[index].qty += qtyToAdd;
  } else {
    // If no item with the same name exists, add a new item
    const newItemToAdd: Item = {
      name: newItem.name,
      qty: qtyToAdd,
      price: newItem.price,
    };
    updatedItems.push(newItemToAdd);
  }

  return updatedItems;
}

function updateItemsQtyInMarket(
  items: Item[],
  newItem: Item,
  qtyToAdd: number
): Item[] {
  const updatedItems = [...items];
  const index = updatedItems.findIndex((item) => item.name === newItem.name);

  if (index !== -1) {
    // If item with the same name exists, update its qty
    updatedItems[index].qty += qtyToAdd;
  }

  return updatedItems;
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
        pocket: removeFromPocket(state.pocket, action.payload),
      };
    case REMOVE_ITEM_FROM_MARKET:
      return {
        ...state,
        market: {
          ...state.market,
          forSale: removeFromMarket(state.market.forSale, action.payload),
        },
      };
    case ADD_ITEM_TO_POCKET:
      return {
        ...state,
        pocket: updateOrAddItemToPocket(
          state.pocket,
          action.payload.item,
          action.payload.qty
        ),
      };
    case ADD_ITEM_TO_MARKET:
      return {
        ...state,
        market: {
          ...state.market,
          forSale: updateItemsQtyInMarket(
            state.market.forSale,
            action.payload.item,
            action.payload.qty
          ),
        },
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
