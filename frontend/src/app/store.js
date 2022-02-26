import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice/authSlice';
import goalReducer from '../features/goalSlice/goalSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    goal: goalReducer,
  },
});
