import { createAsyncThunk } from "@reduxjs/toolkit";
import  axiosInstance  from "../../helpers/axiosInstance.js";

export const getTasks = createAsyncThunk("get/getTasks", async (filter) => {
  try {
    const response = await axiosInstance
      .post("/tasks-filter?page="+filter?.pagination, filter)
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

export const createTask = createAsyncThunk("post/createTask", async (data) => {
  try {
    const response = await axiosInstance
      .post("/tasks", data)
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

export const updateTask = createAsyncThunk("put/updateTask", async (data) => {
  try {
    const response = await axiosInstance
      .put("/tasks/"+data?.id, data)
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

export const deleteTask = createAsyncThunk("delete/deleteTask", async (id) => {
  try {
    const response = await axiosInstance
      .delete("/tasks/"+id)
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

