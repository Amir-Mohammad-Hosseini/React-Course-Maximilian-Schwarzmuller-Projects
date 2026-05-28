import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShowCart: false,
  notification :null
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    showToggle(state) {
      state.isShowCart = !state.isShowCart;
    },
    showNotification  (state , action){
      state.notification = {status :action.payload.status , title : action.payload.title , message : action.payload.message}
    }
  },
});

export const uiReducer = uiSlice.reducer;
export const uiActions = uiSlice.actions;
