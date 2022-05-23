import { createSlice } from "@reduxjs/toolkit";
import { userLogin, userLogout } from "./authActions";

export const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    errors: [],
    status: false
  },
  reducers: {},
  extraReducers: {
    // Login
    [userLogin.pending]: (state, { payload }) => {
      localStorage.clear();
      state.errors = [];
      state.status = false;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      switch (payload?.status) {
        case 200:
          state.status = true;
          localStorage.setItem("token", payload?.data?.data?.token);
          localStorage.setItem("username", payload?.data?.data?.username);
          localStorage.setItem("image", payload?.data?.data?.image);
          break;
        case 422:
          localStorage.clear();
          state.errors = payload?.data;
          break;
        default:
          state.errors = {
            message : "Connection refused !"
          };
          localStorage.clear();
      }
    },
    [userLogin.rejected]: (state, { payload }) => {
      localStorage.clear();
      state.status = false;
      console.log("rejected...");
    },
    // Logout
    [userLogout.pending]: (state, { payload }) => {
      state.errors = [];
      state.status = false;
    },
    [userLogout.fulfilled]: (state, { payload }) => {
      localStorage.clear();
      state.errors = [];
      state.status = true;
    },
    [userLogout.rejected]: (state, { payload }) => {
      localStorage.clear();
      state.status = false;
      console.log("rejected...");
    }
  }
});

// export const {} = authSlice.actions;
export default authSlice.reducer;
