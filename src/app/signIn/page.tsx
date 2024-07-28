'use client';

import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCountryList } from '@/lib/redux-services/AuthSlice';
import { COUNTRYLIST_DETAILS, getItemLocalStorage } from '@/utils';

// Dynamically import LoginTemplate without SSR
const LoginTemplate = dynamic(
  () => import('@/design-system/Template/LoginTemplate'),
  { ssr: false },
);

const SignIn = () => {
  const dispatch = useDispatch();
  const [countryListData, setCountryListData] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const data = getItemLocalStorage(COUNTRYLIST_DETAILS);
      setCountryListData(data);
    }
  }, []);

  useEffect(() => {
    if (countryListData) {
      try {
        const countryList = JSON.parse(countryListData);
        dispatch(setCountryList(countryList));
      } catch (error) {
        console.error('Error parsing country list data:', error);
      }
    }
  }, [countryListData, dispatch]);

  return (
    <>
      <LoginTemplate isVerification={true} />
    </>
  );
};

export default SignIn;
