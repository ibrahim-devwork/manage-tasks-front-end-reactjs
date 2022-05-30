import { createSlice } from "@reduxjs/toolkit";
import { getProfile, changeInfos, changeEmail, changeUsername, changePassword } from "./profileActions";

export const profileSlice = createSlice({
name : 'profileSlice',
initialState  : {
    user            : {},
    errorsInfos     : [],
    errorsEmail     : [],
    errorsUsername  : [],
    errorsPassword  : [],
    isLoading       : false,
    isSuccess       : false,
    isInfos         : false,
    isEmail         : false,
    isUsername      : false,
    isPassword      : false,
},
reducers : {

},
extraReducers : {
    // Get tasks ================
    [getProfile.pending] : (state, {payload}) => {
        state.user              = {}
        state.errorsInfos       = [];
        state.errorsEmail       = [];
        state.errorsUsername    = [];
        state.errorsPassword    = [];
        state.isLoading         = false;
        state.isSuccess         = false;
        state.isInfos           = false;
        state.isEmail           = false;
        state.isUsername        = false;
        state.isPassword        = false;
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
        state.errorsInfos   = [];
        state.isInfos       = false;
        state.isEmail       = false;
        state.isUsername    = false;
        state.isPassword    = false;
    },
    [changeInfos.fulfilled] : (state, {payload}) => {
        if (payload?.status === 200) {
          state.isInfos       = true;
          localStorage.setItem('image', payload?.data?.data?.image); 
        //   state.user       = payload?.data?.data;
          state.errorsInfos     = [];
        } else if(payload?.status === 401 || payload?.status === 403 || payload?.status === 422){
            state.errorsInfos   = payload?.data;
        } else {
            state.errorsInfos   = { message: "Error server !" };
        }
    },
    [changeInfos.rejected] : (state, payload) => {
        console.log("changeInfos is rejected ...");
    },

    // Change Email ================
    [changeEmail.pending] : (state, {payload}) => {
        state.errorsEmail     = [];
        state.isInfos    = false;
        state.isEmail    = false;
        state.isUsername = false;
        state.isPassword = false;
    },
    [changeEmail.fulfilled] : (state, {payload}) => {
        if (payload?.status === 200) {
          state.isEmail       = true;
        //   state.user       = payload?.data?.data;
          state.errorsEmail        = [];
        } else if(payload?.status === 401 || payload?.status === 403 || payload?.status === 422){
            state.errorsEmail   = payload?.data;
        } else {
            state.errorsEmail   = { message: "Error server !" };
        }
    },
    [changeEmail.rejected] : (state, payload) => {
        console.log("changeEmail is rejected ...");
    },

    // Change Usernname ================
    [changeUsername.pending] : (state, {payload}) => {
        state.errorsUsername     = [];
        state.isInfos    = false;
        state.isEmail    = false;
        state.isUsername = false;
        state.isPassword = false;
    },
    [changeUsername.fulfilled] : (state, {payload}) => {
        if (payload?.status === 200) {
          state.isUsername        = true;
          localStorage.setItem('username', payload?.data?.data?.username);
        //   state.user           = payload?.data?.data;
          state.errorsUsername    = [];
        } else if(payload?.status === 401 || payload?.status === 403 || payload?.status === 422){
            state.errorsUsername   = payload?.data;
        } else {
            state.errorsUsername   = { message: "Error server !" };
        }
    },
    [changeUsername.rejected] : (state, payload) => {
        console.log("changeUsername is rejected ...");
    },

    // Change Passwoord ================
    [changePassword.pending] : (state, {payload}) => {
        state.errorsPassword    = [];
        state.isInfos           = false;
        state.isEmail           = false;
        state.isUsername        = false;
        state.isPassword        = false;
    },
    [changePassword.fulfilled] : (state, {payload}) => {
        if (payload?.status === 200) {
          state.isPassword        = true;
        //   state.user           = payload?.data?.data;
          state.errorsPassword    = [];
        } else if(payload?.status === 401 || payload?.status === 403 || payload?.status === 422){
            state.errorsPassword   = payload?.data;
        } else {
            state.errorsPassword   = { message: "Error server !" };
        }
    },
    [changePassword.rejected] : (state, payload) => {
        console.log("changePassword is rejected ...");
    },
}
});

// export const {} = profileSlice.actions;
export default profileSlice.reducer;