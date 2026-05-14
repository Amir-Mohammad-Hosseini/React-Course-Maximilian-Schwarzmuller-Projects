import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter"
import authenticationReducer from "./slices/authentication"

const store = configureStore({
  reducer: {
    counter: counterReducer,
    authentication: authenticationReducer,
  },
});

export default store;
