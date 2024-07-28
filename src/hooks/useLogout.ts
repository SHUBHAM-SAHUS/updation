'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { checkAccessToken } from '@/utils';

const useLogout = (shouldCheck: boolean) => {
  const navigate = useRouter();

  useEffect(() => {
    if (shouldCheck) {
      const token = checkAccessToken();
      if (!token) {
        toast.warn('Please login with your credentials.');
        navigate.push('/');
      } else {
      }
    }
  }, [shouldCheck, navigate]);
};

export default useLogout;
