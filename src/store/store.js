import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./auh/authSlice";
import projectSlice from "./projects/projectSlice";
import taskSlice from "./tasks/taskSlice";
import dropDownsDataSlice from "./dropDownsData/dropDownsDataSlice";
import dashboardSlice from "./dashboard/dashboardSlice";

const store = configureStore({
  reducer: {
    authSlice,
    projectSlice,
    taskSlice,
    dropDownsDataSlice,
    dashboardSlice
  }
});

export default store;
