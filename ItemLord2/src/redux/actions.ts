// actions.js
export const stayDay = () => ({
  type: "STAY_DAY",
});

export const addCash = (amount) => ({
  type: "ADD_CASH",
  payload: amount,
});

export const updatePocket = (pocket) => ({
  type: "UPDATE_POCKET",
  payload: pocket,
});

export const selectItem = (itemName) => ({
  type: "SELECT_ITEM",
  payload: itemName,
});

export const toogleOverlay = () => ({
  type: "TOOGLE_OVERLAY",
});

export const setTradeType = (tradeType) => ({
  type: "SET_TRADE_TYPE",
  payload: tradeType,

})

export const setInputValue = (value) => ({
  type: 'SET_INPUT_VALUE',
  payload: value,
});
