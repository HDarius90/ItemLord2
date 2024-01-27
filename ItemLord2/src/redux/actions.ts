import { Item } from "../types";
import {
  ADD_CASH,
  SELECT_ITEM,
  SET_INPUT_VALUE,
  SET_TRADE_TYPE,
  STAY_DAY,
  TOGGLE_OVERLAY,
  UPDATE_POCKET,
} from "./ActionTypes";

// actions.js
export const stayDay = () => ({
  type: STAY_DAY,
});

export const addCash = (amount: number) => ({
  type: ADD_CASH,
  payload: amount,
});

export const updatePocket = (pocket: Item[]) => ({
  type: UPDATE_POCKET,
  payload: pocket,
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
