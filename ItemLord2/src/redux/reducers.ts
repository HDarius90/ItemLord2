import { initPocket, generateItemsForSale } from "../utils";

// reducers.js
const initialState = {
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
    price: "",
    qty: "",
  },
  tradeType: "",
  pocketSize: 20,
  isOverlayOpen: false,
  inputValue: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "STAY_DAY":
      return {
        ...state,
        stats: { ...state.stats, day: ++state.stats.day },
      };
    case "ADD_CASH":
      return {
        ...state,
        stats: { ...state.stats, cash: state.stats.cash + action.payload },
      };
    case "UPDATE_POCKET":
      return {
        ...state,
        pocket: action.payload,
      };
    case "SELECT_ITEM":
      return {
        ...state,
        selectedItem: action.payload,
      };
    case "TOOGLE_OVERLAY":
      return {
        ...state,
        isOverlayOpen: !state.isOverlayOpen,
      };
    case "SET_TRADE_TYPE":
      return {
        ...state,
        tradeType: action.payload,
      };
    case "SET_INPUT_VALUE":
      return {
        ...state,
        inputValue: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
