import { createAsyncThunk } from "@reduxjs/toolkit";
import  axiosInstance  from "../../helpers/axiosInstance.js";

export const getProfile = createAsyncThunk("get/getProfile", async (filter) => {
  try {
    const response = await axiosInstance
      .get("/profile")
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

export const changeInfos = createAsyncThunk("post/changeInfos", async (data) => {
  try {
    const response = await axiosInstance
      .post("/change-infos", data)
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

export const changeEmail = createAsyncThunk("post/changeEmail", async (data) => {
  try {
    const response = await axiosInstance
      .post("/change-email", data)
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

export const changeUsername = createAsyncThunk("post/changeUsername", async (data) => {
  try {
    const response = await axiosInstance
      .post("/change-username", data)
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

export const changePassword = createAsyncThunk("post/changePassword", async (data) => {
  try {
    const response = await axiosInstance
      .post("/change-password", data)
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