import { createAsyncThunk } from "@reduxjs/toolkit";
import  axiosInstance  from "../../helpers/axiosInstance.js";

export const getDashboard = createAsyncThunk("get/getDashboard", async (filter) => {
  try {
    const response = await axiosInstance
      .post("/dashboard-filter?page="+filter?.pagination, filter)
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
