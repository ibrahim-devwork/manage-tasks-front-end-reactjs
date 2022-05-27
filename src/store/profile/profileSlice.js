import { createSlice } from "@reduxjs/toolkit";
import { getProfile, changeInfos } from "./profileActions";

export const profileSlice = createSlice({
name : 'profileSlice',
initialState  : {
    user       : {},
    errors     : [],
    isLoading  : false,
    isSuccess  : false,
    isInfos    : false,
    isEmail    : false,
    isUsername : false,
    isPassword : false,
},
reducers : {

},
extraReducers : {
    // Get tasks ================
    [getProfile.pending] : (state, {payload}) => {
        state.user       = {}
        state.errors     = [];
        state.isLoading  = false;
        state.isSuccess  = false;
        state.isInfos    = false;
        state.isEmail    = false;
        state.isUsername = false;
        state.isPassword = false;
    },
    [getProfile.fulfilled] : (state, {payload}) => {
        state.isLoading = false;
        if (payload?.status === 200) {
          state.isSuccess       = true;
          state.user            = payload?.data?.data;
          state.errors          = [];
        } else if(payload?.status === 403){
            state.errors   = payload?.data;
        } else {
            state.errors   = { message: "Error no data available !" };
        }
    },
    [getProfile.rejected] : (state, payload) => {
        console.log("getProfile is rejected ...");
    },

    // Change infos ================
    [changeInfos.pending] : (state, {payload}) => {
        state.errors     = [];
        state.isInfos    = false;
        state.isEmail    = false;
        state.isUsername = false;
        state.isPassword = false;
    },
    [changeInfos.fulfilled] : (state, {payload}) => {
        if (payload?.status === 200) {
          state.isInfos       = true;
          localStorage.setItem('image', payload?.data?.data?.image); 
        //   state.user            = payload?.data?.data;
          state.errors          = [];
        } else if(payload?.status === 401 || payload?.status === 403 || payload?.status === 422){
            state.errors   = payload?.data;
        } else {
            state.errors   = { message: "Error server !" };
        }
    },
    [changeInfos.rejected] : (state, payload) => {
        console.log("changeInfos is rejected ...");
    },
}
});

// export const {} = profileSlice.actions;
export default profileSlice.reducer;