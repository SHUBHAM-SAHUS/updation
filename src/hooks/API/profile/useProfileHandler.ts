import { authService, ProfileService } from '@/api-services';
import { setCountryList } from '@/lib/redux-services/AuthSlice';
import { setProfileDetails } from '@/lib/redux-services/ProfileSlice';
import {
  API_UNIQUE_KEYS,
  COUNTRYLIST_DETAILS,
  setItemLocalStorage,
  SUCCESS_STATUS_CODE,
  SUCCESS_STATUS_MESSAGE,
} from '@/utils';
import { debug } from 'console';
import { useRouter } from 'next/navigation';
import { use, useEffect } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const useProfileHandler = () => {
  const router = useRouter();
  const dispatch = useDispatch();
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
        console.log('data', data.data);
        // Dispatch country list to Redux store
        setItemLocalStorage(COUNTRYLIST_DETAILS, JSON.stringify(data.data));
        // dispatch(setCountryList(countryList.data));
      },
    },
  );

  const { mutate: profileType, isLoading: isProfileTypeLoading } = useMutation(
    (payload: any) => ProfileService.profileType(payload),
    {
      onSuccess: (data: any) => {
        if (
          data.statusCode === SUCCESS_STATUS_CODE &&
          data.status === SUCCESS_STATUS_MESSAGE
        ) {
          toast.success(data.message);
          router.push('/profiletype/familyaccount');
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

  const { mutate: familyaccount, isLoading: familyLoading } = useMutation(
    (payload: any) => ProfileService.familyAccount(payload),
    {
      onSuccess: (data: any) => {
        if (
          data.statusCode === SUCCESS_STATUS_CODE &&
          data.status === SUCCESS_STATUS_MESSAGE
        ) {
          router.push('/profiletype/addfamilyaccount');
          toast.success(data.message);
        } else {
          toast.error(data.message);
        }
      },
      onError: (error: any) => {
        toast.error(error);
      },
    },
  );

  const { mutate: personalDetails, isLoading: personalDetailsLoading } =
    useMutation(
      (payload: any) => ProfileService.personalAccountCreation(payload),
      {
        onSuccess: (data: any) => {
          if (
            data.statusCode === SUCCESS_STATUS_CODE &&
            data.status === SUCCESS_STATUS_MESSAGE
          ) {
            debugger;

            dispatch(setProfileDetails(data?.data?.profile));
            // router.push('/profiletype/addfamilyaccount');
            toast.success(data.message);
          } else {
            toast.error(data.message);
          }
        },
        onError: (error: any) => {
          toast.error(error);
        },
      },
    );

  const { mutate: childProfileType, isLoading: childProfileTypeLoading } =
    useMutation((payload: any) => ProfileService.childrenStatus(payload), {
      onSuccess: (data: any) => {
        if (
          data.statusCode === SUCCESS_STATUS_CODE &&
          data.status === SUCCESS_STATUS_MESSAGE
        ) {
          router.push('/profiletypechildren/addkids');
          toast.success(data.message);
        } else {
          toast.error(data.message);
        }
      },
      onError: (error: any) => {
        toast.error(error);
      },
    });

  const { mutate: addChildren, isLoading: isLoadingaddChildren } = useMutation(
    (payload: any) => ProfileService.childrenCreation(payload),
    {
      onSuccess: (data: any) => {
        if (
          data.statusCode === SUCCESS_STATUS_CODE &&
          data.status === SUCCESS_STATUS_MESSAGE
        ) {
          router.push('/profile');
          toast.success(data.message);
        } else {
          toast.error(data.message);
        }
      },
      onError: (error: any) => {
        toast.error(error);
      },
    },
  );

  return {
    profileType,
    isProfileTypeLoading,
    familyaccount,
    familyLoading,
    countryList,
    countryLoading,
    personalDetails,
    personalDetailsLoading,
    childProfileType,
    childProfileTypeLoading,
    addChildren,
    isLoadingaddChildren,
  };
};

export default useProfileHandler;
