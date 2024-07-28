'use client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isLoading: boolean;
  verifyModal: boolean;
  countryData: any[];
  otpDetails: any;
  currentSelectCountry: any;
}

const initialState: AuthState = {
  isLoading: false,
  verifyModal: false,
  countryData: [],
  otpDetails: '',
  currentSelectCountry: '',
};

const AuthSlice = createSlice({
  name: 'AuthSlice',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setVerifyModal: (state, action: PayloadAction<boolean>) => {
      state.verifyModal = action.payload;
    },

    setCountryList: (state, action: PayloadAction<any[]>) => {
      state.countryData = action.payload;
    },
    setOtpDetails: (state, action: PayloadAction<any>) => {
      state.otpDetails = action.payload;
    },
    currentSelectedCountryDetails: (state, action: PayloadAction<any>) => {
      state.currentSelectCountry = action.payload;
    },
  },
});

export const {
  setLoading,
  setVerifyModal,
  setCountryList,
  setOtpDetails,
  currentSelectedCountryDetails,
} = AuthSlice.actions;
export default AuthSlice.reducer;
