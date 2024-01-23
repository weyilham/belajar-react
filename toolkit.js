import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

//create action
const addToCart = createAction("ADD_TO_CART");

//reducer
const cartReducer = createReducer([], (builder) => {
  builder.addCase("ADD_TO_CART", (state, action) => {
    state.push(action.payload);
  });
});

//store
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

console.log("Create Store : ", store.getState());

store.subscribe(() => {
  console.log("STORE CHANGE : ", store.getState());
});

//dispatch
store.dispatch(addToCart({ id: 1, qty: 20 }));
store.dispatch(addToCart({ id: 2, qty: 10 }));
