import { createSlice } from "@reduxjs/toolkit";
import { 
    getDropDownProjects, 
    getDropDownUsers, 
    getDropDownRoles, 
    getDropDownActions 
} from "./dropDownsDataActions";

export const dropDownsDataSlice = createSlice({
name : 'dropDownsDataSlice',
initialState  : {
    projects    : [],
    users       : [],
    roles       : [],
    actions     : [],
    errors      : []
},
reducers : {

},
extraReducers : {
    // Get Projects ================
    [getDropDownProjects.pending] : (state, {payload}) => {
        state.projects    = [];
        state.errors      = [];
    },
    [getDropDownProjects.fulfilled] : (state, {payload}) => {
        if (payload?.status === 200) {
          state.projects   = payload?.data;
        } else {
            state.errors   = { message: "Error no data available !" };
        }
    },
    [getDropDownProjects.rejected] : (state, payload) => {
        console.log("getDropDownProjects is rejected ...");
    },

    // Get Users ================
    [getDropDownUsers.pending] : (state, {payload}) => {
        state.users         = [];
        state.errors        = [];
    },
    [getDropDownUsers.fulfilled] : (state, {payload}) => {
        if (payload?.status === 200) {
          state.users      = payload?.data;
        } else {
            state.errors   = { message: "Error no data available !" };
        }
    },
    [getDropDownUsers.rejected] : (state, payload) => {
        console.log("getDropDownUsers is rejected ...");
    },

    // Get Roles ================
    [getDropDownRoles.pending] : (state, {payload}) => {
        state.roles         = [];
        state.errors        = [];
    },
    [getDropDownRoles.fulfilled] : (state, {payload}) => {
        if (payload?.status === 200) {
          state.roles      = payload?.data;
        } else {
            state.errors   = { message: "Error no data available !" };
        }
    },
    [getDropDownRoles.rejected] : (state, payload) => {
        console.log("getDropDownRoles is rejected ...");
    },

    // Get Actions ================
    [getDropDownActions.pending] : (state, {payload}) => {
        state.actions         = [];
        state.errors        = [];
    },
    [getDropDownActions.fulfilled] : (state, {payload}) => {
        if (payload?.status === 200) {
          state.actions    = payload?.data;
        } else {
            state.errors   = { message: "Error no data available !" };
        }
    },
    [getDropDownActions.rejected] : (state, payload) => {
        console.log("getDropDownActions is rejected ...");
    },
}
});

// export const {} = dropDownsDataSlice.actions;
export default dropDownsDataSlice.reducer;