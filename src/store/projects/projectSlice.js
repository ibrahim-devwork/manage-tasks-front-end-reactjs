import { createSlice } from "@reduxjs/toolkit";
import { getProjects, createProject, updateProject , deleteProject} from "./projectActions";

export const projectSlice = createSlice({
name : 'projectSlice',
initialState  : {
    projects : [],
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
    // Get projects ================
    [getProjects.pending] : (state, {payload}) => {
        state.projects      = [];
        state.errorsGetData = [];
        state.errors        = [];
        state.isLoading     = true;
        state.isSuccess     = false;
        state.isDone        = false;
        state.isUpdate      = false;
        state.isDelete      = 0;
        state.countPerPage  = 0;
    },
    [getProjects.fulfilled] : (state, {payload}) => {
        state.isLoading = false;
        if (payload?.status === 200) {
          state.isSuccess       = true;
          state.projects        = payload?.data?.data;
          state.countPerPage    = payload?.data?.meta?.last_page;
        } else if(payload?.status === 403){
            state.errorsGetData   = payload?.data;
        } else {
            state.errorsGetData   = { message: "Error no data available !" };
        }
    },
    [getProjects.rejected] : (state, payload) => {
        console.log("getProjects is rejected ...");
    },

    // Save project ================
    [createProject.pending] : (state, {payload}) => {
        state.errors        = [];
        state.isDone        = false;
        state.isDelete      = 0;
    },
    [createProject.fulfilled] : (state, {payload}) => {
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
    [createProject.rejected] : (state, payload) => {
        console.log("getProjects is rejected ...");
    },

    // Update project ================
    [updateProject.pending] : (state, {payload}) => {
      state.errors        = [];
      state.isUpdate      = false;
      state.isDelete      = 0;
    },
    [updateProject.fulfilled] : (state, {payload}) => {
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
    [updateProject.rejected] : (state, payload) => {
        console.log("getProjects is rejected ...");
    },

    // Delete project ================
    [deleteProject.pending] : (state, {payload}) => {
      state.errors        = [];
      state.isDelete      = 0;
    },
    [deleteProject.fulfilled] : (state, {payload}) => {
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
    [deleteProject.rejected] : (state, payload) => {
        console.log("getProjects is rejected ...");
    },
}
});

// export const {} = projectSlice.actions;
export default projectSlice.reducer;