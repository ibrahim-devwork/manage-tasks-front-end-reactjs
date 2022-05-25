import { createSlice } from "@reduxjs/toolkit";
import { getTasks, createTask, updateTask, deleteTask} from "./taskActions";

export const taskSlice = createSlice({
name : 'taskSlice',
initialState  : {
    tasks : [],
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
    // Get tasks ================
    [getTasks.pending] : (state, {payload}) => {
        state.tasks         = [];
        state.errorsGetData = [];
        state.errors        = [];
        state.isLoading     = true;
        state.isSuccess     = false;
        state.isDone        = false;
        state.isUpdate      = false;
        state.isDelete      = 0;
        state.countPerPage  = 0;
    },
    [getTasks.fulfilled] : (state, {payload}) => {
        state.isLoading = false;
        if (payload?.status === 200) {
          state.isSuccess       = true;
          state.tasks        = payload?.data?.data;
          state.countPerPage    = payload?.data?.meta?.last_page;
        } else if(payload?.status === 403){
            state.errorsGetData   = payload?.data;
        } else {
            state.errorsGetData   = { message: "Error no data available !" };
        }
    },
    [getTasks.rejected] : (state, payload) => {
        console.log("getProjects is rejected ...");
    },

    // Save task ================
    [createTask.pending] : (state, {payload}) => {
        state.errors        = [];
        state.isDone        = false;
        state.isDelete      = 0;
    },
    [createTask.fulfilled] : (state, {payload}) => {
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
    [createTask.rejected] : (state, payload) => {
        console.log("getProjects is rejected ...");
    },

    // Update task ================
    [updateTask.pending] : (state, {payload}) => {
      state.errors        = [];
      state.isUpdate      = false;
      state.isDelete      = 0;
    },
    [updateTask.fulfilled] : (state, {payload}) => {
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
    [updateTask.rejected] : (state, payload) => {
        console.log("getProjects is rejected ...");
    },

    // Delete task ================
    [deleteTask.pending] : (state, {payload}) => {
      state.errors        = [];
      state.isDelete      = 0;
    },
    [deleteTask.fulfilled] : (state, {payload}) => {
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
    [deleteTask.rejected] : (state, payload) => {
        console.log("getProjects is rejected ...");
    },
}
});

// export const {} = taskSlice.actions;
export default taskSlice.reducer;