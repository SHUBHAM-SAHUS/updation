'use client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProfileState {
  isLoading: boolean;
  profileDetails: any;
}

const initialState: ProfileState = {
  isLoading: false,
  profileDetails: '',
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
  },
});

export const { setProfileDetails, setLoading } = profileSlice.actions;
export default profileSlice.reducer;
