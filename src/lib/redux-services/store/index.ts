'use client';
import { configureStore } from '@reduxjs/toolkit';
import authProvider from '../AuthSlice';
import profilProvider from '../ProfileSlice'

export const store = configureStore({
  reducer: {
    AuthReducer: authProvider,
    profileReducer: profilProvider,
  },
});

// Optional: If you want to define the types for the state and dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
