import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../helpers/axiosInstance";

export const userLogin = createAsyncThunk("login/userLogin", async (data) => {
  try {
    const response = await axiosInstance
      .post("/login", data)
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

export const userLogout = createAsyncThunk("logout/userLogout", async () => {
  try {
    const response = await axiosInstance
      .post("/logout")
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
