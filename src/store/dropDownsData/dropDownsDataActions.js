import { createAsyncThunk } from "@reduxjs/toolkit";
import  axiosInstance  from "../../helpers/axiosInstance.js";

export const getDropDownProjects = createAsyncThunk("get/getDropDownProjects", async () => {
  try {
    const response = await axiosInstance
      .get("/select-projects")
      .then((response) => response)
      .catch((error) => error.response);
      return {
      data: await response?.data,
      status: await response?.status
    };
  } catch (error) {
    console.log(error);
  }
});

export const getDropDownUsers = createAsyncThunk("get/getDropDownUsers", async () => {
    try {
      const response = await axiosInstance
        .get("/select-users")
        .then((response) => response)
        .catch((error) => error.response);
        return {
        data: await response?.data,
        status: await response?.status
      };
    } catch (error) {
      console.log(error);
    }
  });

  export const getDropDownRoles = createAsyncThunk("get/getDropDownRoles", async () => {
    try {
      const response = await axiosInstance
        .get("/select-roles")
        .then((response) => response)
        .catch((error) => error.response);
        return {
        data: await response?.data,
        status: await response?.status
      };
    } catch (error) {
      console.log(error);
    }
  });

  export const getDropDownActions = createAsyncThunk("get/getDropDownActions", async () => {
    try {
      const response = await axiosInstance
        .get("/select-actions")
        .then((response) => response)
        .catch((error) => error.response);
        return {
        data: await response?.data,
        status: await response?.status
      };
    } catch (error) {
      console.log(error);
    }
  });