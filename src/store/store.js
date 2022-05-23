import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./auh/authSlice";
import projectSlice from "./projects/projectSlice";

const store = configureStore({
  reducer: {
    authSlice,
    projectSlice
  }
});

export default store;
