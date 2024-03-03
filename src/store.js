import { createStore } from "@reduxjs/toolkit";
const initialState = {
  amount: 0,
  loan: 0,
  purpose: "",
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, amount: state.amount + action.payload };
    case "account/withdraw":
      return { ...state, amount: state.amount - action.payload };

    default:
      return state;
  }
}

const store = createStore(reducer);
function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}

store.dispatch(deposit(200));
console.log("store");
console.log(store.getState());
