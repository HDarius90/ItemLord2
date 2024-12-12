import { Item } from "../types";
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
  UPDATE_MARKET,
} from "./ActionTypes";

// actions.js
export const stayDay = () => ({
  type: STAY_DAY,
});

export const addCash = (amount: number) => ({
  type: ADD_CASH,
  payload: amount,
});

export const removeItemFromPocket = (name: string, qty: number) => ({
  type: REMOVE_ITEM_FROM_POCKET,
  payload: { name, qty },
});

export const removeItemFromMarket = (name: string, qty: number) => ({
  type: REMOVE_ITEM_FROM_MARKET,
  payload: { name, qty },
});

export const addItemToPocket = (item: Item, qty: number) => ({
  type: ADD_ITEM_TO_POCKET,
  payload: { item, qty },
});

export const addItemToMarket = (item: Item, qty: number) => ({
  type: ADD_ITEM_TO_MARKET,
  payload: { item, qty },
});

export const updateMarket = () => ({
  type: UPDATE_MARKET,
});

export const selectItem = (item: Item) => ({
  type: SELECT_ITEM,
  payload: item,
});

export const toggleOverlay = () => ({
  type: TOGGLE_OVERLAY,
});

export const setTradeType = (tradeType: string) => ({
  type: SET_TRADE_TYPE,
  payload: tradeType,
});

export const setInputValue = (value: number) => ({
  type: SET_INPUT_VALUE,
  payload: value,
});
