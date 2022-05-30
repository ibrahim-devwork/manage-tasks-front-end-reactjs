import { createSlice } from "@reduxjs/toolkit";
import { getUsers, createUser, updateUser, deleteUser } from "./userActions";

export const userSlice = createSlice({
name : 'userSlice',
initialState  : {
    users : [],
    errorsGetData : [],
    errors : [],
    isLoading : false,
    isSuccess : false,
    isDone : false,
    isUpdate : false,
    isDelete : 0,
    countPerPage : 0,
},
reducers : {

},
extraReducers : {
    // Get users ================
    [getUsers.pending] : (state, {payload}) => {
        state.users         = [];
        state.errorsGetData = [];
        state.errors        = [];
        state.isLoading     = true;
        state.isSuccess     = false;
        state.isDone        = false;
        state.isUpdate      = false;
        state.isDelete      = 0;
        state.countPerPage  = 0;
    },
    [getUsers.fulfilled] : (state, {payload}) => {
        state.isLoading = false;
        if (payload?.status === 200) {
          state.isSuccess       = true;
          state.users           = payload?.data?.data;
          state.countPerPage    = payload?.data?.meta?.last_page;
        } else if(payload?.status === 403){
            state.errorsGetData   = payload?.data;
        } else {
            state.errorsGetData   = { message: "Error no data available !" };
        }
    },
    [getUsers.rejected] : (state, payload) => {
        console.log("getUsers is rejected ...");
    },

    // Save user ================
    [createUser.pending] : (state, {payload}) => {
        state.errors        = [];
        state.isDone        = false;
        state.isDelete      = 0;
    },
    [createUser.fulfilled] : (state, {payload}) => {
        switch (payload?.status) {
            case 401:
              state.errors = {
                message: "Authorization required. Sign in to your account.!"
              };
              break;
            case 403:
              state.errors = {
                message: "You do not have permission to perform this action !"
              };
              break;
            case 201:
              state.isDone = true;
              break;
            case 422:
              state.errors = payload?.data?.errors;
              break;
            default:
              state.errors = { message: "Something is wrong !" };
          }
    },
    [createUser.rejected] : (state, payload) => {
        console.log("createUser is rejected ...");
    },

    // Update user ================
    [updateUser.pending] : (state, {payload}) => {
      state.errors        = [];
      state.isUpdate      = false;
      state.isDelete      = 0;
    },
    [updateUser.fulfilled] : (state, {payload}) => {
        switch (payload?.status) {
            case 401:
              state.errors = {
                message: "Authorization required. Sign in to your account.!"
              };
              break;
            case 403:
              state.errors = {
                message: "You do not have permission to perform this action !"
              };
              break;
            case 200:
              state.isUpdate = true;
              break;
            case 422:
              state.errors = payload?.data?.errors;
              break;
            default:
              state.errors = { message: "Something is wrong !" };
          }
    },
    [updateUser.rejected] : (state, payload) => {
        console.log("updateUser is rejected ...");
    },

    // Delete user ================
    [deleteUser.pending] : (state, {payload}) => {
      state.errors        = [];
      state.isDelete      = 0;
    },
    [deleteUser.fulfilled] : (state, {payload}) => {
        switch (payload?.status) {
            case 401:
              state.isDelete  = 2;
              state.errors = {
                message: "Authorization required. Sign in to your account.!"
              };
              break;
            case 403:
              state.isDelete  = 2;
              state.errors = {
                message: "You do not have permission to perform this action !"
              };
              break;
            case 200:
              state.isDelete  = 1;
              break;
            case 422:
              state.isDelete  = 2;
              state.errors = payload?.data?.errors;
              break;
            default:
              state.isDelete  = 2;
              state.errors = { message: "Something is wrong !" };
          }
    },
    [deleteUser.rejected] : (state, payload) => {
        console.log("deleteUser is rejected ...");
    },
}
});

// export const {} = userSlice.actions;
export default userSlice.reducer;