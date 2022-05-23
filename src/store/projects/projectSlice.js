import { createSlice } from "@reduxjs/toolkit";
import { getProjects } from "./projectActions";

export const projectSlice = createSlice({
name : 'projectSlice',
initialState  : {
    projects : [],
    errorsGetData : [],
    errors : [],
    isLoading : false,
    isSuccess : false,
    isDone : false,
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
}
});

// export const {} = projectSlice.actions;
export default projectSlice.reducer;