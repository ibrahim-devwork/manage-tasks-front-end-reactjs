import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./auh/authSlice";
import projectSlice from "./projects/projectSlice";
import taskSlice from "./tasks/taskSlice";
import dropDownsDataSlice from "./dropDownsData/dropDownsDataSlice";
import dashboardSlice from "./dashboard/dashboardSlice";
import profileSlice from "./profile/profileSlice";
import userSlice from "./users/userSlice";

const store = configureStore({
  reducer: {
    authSlice,
    projectSlice,
    taskSlice,
    dropDownsDataSlice,
    dashboardSlice,
    profileSlice,
    userSlice
  }
});

export default store;
