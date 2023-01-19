import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosYoFio} from '../utils/axios';

export const fetchUsers = createAsyncThunk('user/getUsers', async () => {
  const response = await AxiosYoFio.get('/users');
  return response.data;
});
