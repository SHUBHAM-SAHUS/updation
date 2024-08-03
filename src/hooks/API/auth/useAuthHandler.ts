import { authService } from '@/api-services';
import { setCountryList } from '@/lib/redux-services/AuthSlice';
import {
  API_UNIQUE_KEYS,
  COUNTRYLIST_DETAILS,
  setItemLocalStorage,
  SUCCESS_STATUS_CODE,
  SUCCESS_STATUS_MESSAGE,
} from '@/utils';
import { useRouter } from 'next/navigation';
import { use, useEffect } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const useAuthHandler = () => {
  const dispatch = useDispatch();
  const router = useRouter()
  const queryOptions = {
    staleTime: 1 * 60 * 1000, // 1 minute
    cacheTime: 2 * 60 * 1000, // 2 minutes
  };

  // TODO: for get

  const { data: countryList, isLoading: countryLoading } = useQuery<any>(
    [API_UNIQUE_KEYS.CountryDetails],
    () => authService.countryList(),
    {
      // ...queryOptions,
      onSuccess: (data) => {
        // Dispatch country list to Redux store
        setItemLocalStorage(COUNTRYLIST_DETAILS, JSON.stringify(data.data));
        dispatch(setCountryList(countryList?.data));
      },
    },
  );

  const { mutate: sendOtp, isLoading: isOtpLoading } = useMutation(
    (payload: any) => authService.sendOtp(payload),
    {
      onSuccess: (data) => {
        if (
          data.statusCode === SUCCESS_STATUS_CODE &&
          data.status === SUCCESS_STATUS_MESSAGE
        ) {
          router.push('/signIn');
          toast.success(data.message);
        } else {
          toast.error(data.message);

          // toast.error(errorMessage);
        }
      },
      onError: (error: any) => {
        toast.error(error);
      },
    },
  );

  const { mutate: verifyOtp, isLoading: verifyLoading } = useMutation(
    (payload: any) => authService.verifyOtp(payload),
    {
      onSuccess: (data) => {
        if (
          data.statusCode === SUCCESS_STATUS_CODE &&
          data.status === SUCCESS_STATUS_MESSAGE
        ) {
        } else {
        }
      },
      onError: (error: any) => {
        toast.error(error);
      },
    },
  );

  return {
    sendOtp,
    isOtpLoading,
    verifyOtp,
    verifyLoading,
    countryList,
    countryLoading,
  };
};

export default useAuthHandler;
