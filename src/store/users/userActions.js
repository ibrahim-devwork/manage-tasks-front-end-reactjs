import { createAsyncThunk } from "@reduxjs/toolkit";
import  axiosInstance  from "../../helpers/axiosInstance.js";

export const getUsers = createAsyncThunk("get/getUsers", async (filter) => {
  try {
    const response = await axiosInstance
      .post("/users-filter?page="+filter?.pagination, filter)
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

export const createUser = createAsyncThunk("post/createUser", async (data) => {
  try {
    const response = await axiosInstance
      .post("/users", data)
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

export const updateUser = createAsyncThunk("put/updateUser", async (data) => {
  try {
    const response = await axiosInstance
      .put("/users/"+data?.id, data)
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

export const deleteUser = createAsyncThunk("delete/deleteUser", async (id) => {
  try {
    const response = await axiosInstance
      .delete("/users/"+id)
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

