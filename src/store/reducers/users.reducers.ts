import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';
import type {RootState} from '../';
import {User} from '../../interfaces/user.interface';
import {fetchUsers} from '../../services/user.service';

interface UsersState {
  users: User[];
  isLoading: boolean;
  error: unknown;
}

const initialState: UsersState = {
  users: [],
  isLoading: false,
  error: undefined,
};

const userAdapter = createEntityAdapter();
export const usersSlice = createSlice({
  name: 'users',
  initialState: userAdapter.getInitialState(initialState),
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, state => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        if (action.payload.error) {
          return {...state, isLoading: false, error: action.payload.error};
        } else {
          return {...state, isLoading: false, users: [...action.payload]};
        }
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});

// Other code such as selectors can use the imported `RootState` type
export const selectUsers = (state: RootState) => state.users;

export default usersSlice.reducer;
