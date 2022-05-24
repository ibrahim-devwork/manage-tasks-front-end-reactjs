import { createAsyncThunk } from "@reduxjs/toolkit";
import  axiosInstance  from "../../helpers/axiosInstance.js";

export const getProjects = createAsyncThunk("get/getProjects", async (filter) => {
  try {
    const response = await axiosInstance
      .post("/projects-filter?page="+filter?.pagination, filter)
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

export const createProject = createAsyncThunk("post/createProject", async (data) => {
  try {
    const response = await axiosInstance
      .post("/projects", data)
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

export const updateProject = createAsyncThunk("put/updateProject", async (data) => {
  try {
    const response = await axiosInstance
      .put("/projects/"+data?.id, data)
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

export const deleteProject = createAsyncThunk("delete/deleteProject", async (id) => {
  try {
    const response = await axiosInstance
      .delete("/projects/"+id)
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

