import {Action, combineReducers, configureStore} from '@reduxjs/toolkit';
import usersReducer from './reducers/users.reducers';
import {ThunkAction} from 'redux-thunk';

const rootReducer = combineReducers({users: usersReducer});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;
