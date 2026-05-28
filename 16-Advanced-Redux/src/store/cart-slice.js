import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
    },
    addItem(state, action) {
      const itemId = action.payload.id;
      const existItem = state.items.find((item) => item.id === itemId);
      if (existItem) {
        existItem.quantity += 1;
      } else {
        state.items.push(action.payload);
      }
      state.changed = true;
    },
    increaseItem(state, action) {
      const itemId = action.payload;
      const existItem = state.items.find((item) => item.id === itemId);
      if (existItem) {
        existItem.quantity += 1;
      }
      state.changed = true;
    },
    decreaseItem(state, action) {
      const itemId = action.payload;
      const existItem = state.items.find((item) => item.id === itemId);
      if (existItem.quantity > 1) {
        existItem.quantity -= 1;
      } else {
        state.items = state.items.filter((item) => item.id !== itemId);
      }
      state.changed = true;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
