import { createSlice } from "@reduxjs/toolkit";
import { userLogin, userLogout } from "./authActions";

export const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    errors: [],
    status: false,
    isLogout : false,
  },
  reducers: {},
  extraReducers: {
    // Login
    [userLogin.pending]: (state, { payload }) => {
      localStorage.clear();
      state.errors    = [];
      state.status    = false;
      state.isLogout  = false;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      switch (payload?.status) {
        case 200:
          state.status = true;
          localStorage.setItem("token", payload?.data?.data?.token);
          localStorage.setItem("username", payload?.data?.data?.username);
          localStorage.setItem("image", payload?.data?.data?.image);
          localStorage.setItem("role", payload?.data?.data?.id_role);
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
      state.isLogout  = false;
    },
    [userLogout.fulfilled]: (state, { payload }) => {
      if(payload?.status === 200){
          localStorage.clear();
          state.errors = [];
          state.isLogout  = true;
      } else {
          localStorage.clear();
          state.errors = [];
          state.isLogout  = true;
      }
    },
    [userLogout.rejected]: (state, { payload }) => {
      console.log("rejected...");
    }
  }
});

// export const {} = authSlice.actions;
export default authSlice.reducer;
