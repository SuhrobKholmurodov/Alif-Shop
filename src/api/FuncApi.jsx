import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// data: []
export const getProducts = createAsyncThunk("data/getProducts", async () => {
  try {
    const { data } = await axios.get(
      `https://fake-store-api.mock.beeceptor.com/api/products`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
});

// User: []
export const getUsers = createAsyncThunk("data/getUsers", async () => {
  try {
    const { data } = await axios.get(
      `https://fake-store-api.mock.beeceptor.com/api/users`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
});

// Card:[]
export const getCard = createAsyncThunk("data/getCard", async () => {
  try {
    const { data } = await axios.get(
      `https://fake-store-api.mock.beeceptor.com/api/carts`
    );
    // return data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
});
