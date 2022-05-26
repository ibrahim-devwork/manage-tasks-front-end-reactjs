import { createSlice } from "@reduxjs/toolkit";
import { getDashboard } from "./dashboardActions";

export const dashboardSlice = createSlice({
name : 'dashboardSlice',
initialState  : {
    tasks : [],
    errorsGetData : [],
    isLoading : false,
    isSuccess : false,
    countPerPage : 0,
},
reducers : {

},
extraReducers : {
    // Get tasks ================
    [getDashboard.pending] : (state, {payload}) => {
        state.tasks         = [];
        state.errorsGetData = [];
        state.isLoading     = true;
        state.isSuccess     = false;
        state.countPerPage  = 0;
    },
    [getDashboard.fulfilled] : (state, {payload}) => {
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
    [getDashboard.rejected] : (state, payload) => {
        console.log("getDashboard is rejected ...");
    },
}
});

// export const {} = dashboardSlice.actions;
export default dashboardSlice.reducer;