'use client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProfileState {
  isLoading: boolean;
  profileDetails: any;
  isExitingUser: boolean;
  isDrawer:boolean
}

const initialState: ProfileState = {
  isLoading: false,
  profileDetails: '',
  isExitingUser: false,
  isDrawer:false
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileDetails: (state, action: PayloadAction<any>) => {
      state.profileDetails = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setExitingUser: (state, action: PayloadAction<boolean>) => {
      state.isExitingUser = action.payload;
    },
    setDrawer: (state, action: PayloadAction<boolean>) => {
      state.isDrawer = action.payload;
    },
  },
});

export const { setProfileDetails, setLoading, setExitingUser, setDrawer } =
  profileSlice.actions;
export default profileSlice.reducer;
