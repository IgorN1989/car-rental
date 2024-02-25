import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65da22eabcc50200fcdca029.mockapi.io/';

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAll',
  async ({ page, limit }, thunkAPI) => {
    const params = { page, limit };
    try {
      const response = await axios.get('/adverts', { params });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
