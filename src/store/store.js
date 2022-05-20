import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./auh/authSlice";

const store = configureStore({
  reducer: {
    authSlice
  }
});

export default store;
