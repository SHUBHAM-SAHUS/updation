'use client';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import LoginLogo from '@/assets/Images/logo.svg';
import { InputDropdown } from '@/design-system/Molecules';
import { Button, Image, Typography } from '@/design-system/Atoms';
import styles from './style.module.scss';
import CustomModal from '../CustomModal';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { useAuthHandler } from '@/hooks/API';
import Link from 'next/link';
import {
  currentSelectedCountryDetails,
  setOtpDetails,
  setVerifyModal,
} from '@/lib/redux-services/AuthSlice';
import { SELECT_COUNTRY, setItemLocalStorage, SIGIN_DETAILS } from '@/utils';
import { useRouter } from 'next/navigation';

interface FormData {
  phoneNumber: string;
  mobileNumberPrefix: string;
}

const LoginSection: React.FC = () => {
  const router = useRouter();
  const isMobile = useMediaQuery('(max-width:767px)');
  const dispatch = useDispatch();

  const { sendOtp, isOtpLoading } = useAuthHandler();
  const [open, setOpen] = useState<boolean>(false);
  const [countryCode, setCountryCode] = useState('+91');
  const countryList = useSelector(
    (state: any) => state.AuthReducer.countryData,
  );

   const selectedCountry = countryList?.find(
     (country: any) => country.mobileNumberPrefix === countryCode,
   );

  const otpDetails = useSelector((state: any) => state.AuthReducer.otpDetails);

  const {
    control,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
    setValue, // Add setValue to set the input field value
  } = useForm<FormData>({
    defaultValues: {
      phoneNumber: otpDetails?.mobile || '',
      mobileNumberPrefix: otpDetails?.mobileNumberPrefix ,
    },
  });



  useEffect(() => {
    if (otpDetails?.mobile && otpDetails?.mobileNumberPrefix) {
      setValue('phoneNumber', otpDetails.mobile);
      setCountryCode(otpDetails.mobileNumberPrefix);
    }
  },[])
  



  useEffect(() => {
    // if (otpDetails?.mobile && otpDetails?.mobileNumberPrefix) {
    //   setValue('phoneNumber', otpDetails.mobile);
    //   setCountryCode(otpDetails.mobileNumberPrefix);
    // }

    const selectedCountry = countryList?.find(
      (country: any) => country.mobileNumberPrefix === countryCode,
    );

    if (selectedCountry) {
      dispatch(currentSelectedCountryDetails(selectedCountry));
      setItemLocalStorage(SELECT_COUNTRY, JSON.stringify(selectedCountry));
    }
  }, [countryList, setValue, dispatch, otpDetails, countryCode]);

  const validatePhoneNumber = (number: string) => {
    const selectedCountry = countryList?.find(
      (country: any) => country.mobileNumberPrefix === countryCode,
    );

    if (!selectedCountry) return true;

    const { mobileNumberLengthMin, mobileNumberLengthMax } = selectedCountry;
    if (
      number.length < mobileNumberLengthMin ||
      number.length > mobileNumberLengthMax
    ) {
      setError('phoneNumber', {
        type: 'manual',
        message: `Please enter a valid Phone Number`,
      });
      return false;
    }
    clearErrors('phoneNumber');
    return true;
  };

  const handleCountryCodeChange = useCallback(
    (code: string) => {
      setCountryCode(code);
      const selectedCountry = countryList?.find(
        (country: any) => country.mobileNumberPrefix === code,
      );
      if (selectedCountry) {
        dispatch(currentSelectedCountryDetails(selectedCountry));
        setItemLocalStorage(SELECT_COUNTRY, JSON.stringify(selectedCountry));
      }
    },
    [countryList, dispatch],
  );

  const onSubmit = (data: FormData) => {
    if (data.phoneNumber === '') {
      setError('phoneNumber', {
        type: 'manual',
        message: 'Phone number is required',
      });
      return;
    }
    if (validatePhoneNumber(data.phoneNumber)) {
      const selectedCountry = countryList?.find(
        (country: any) => country.mobileNumberPrefix === countryCode,
      );

      const payload = {
        mobile: Number(data.phoneNumber),
        mobileNumberPrefix: selectedCountry?.mobileNumberPrefix,
        countryCode: selectedCountry?.countryCode,
      };
      try {
        sendOtp(payload);
        setItemLocalStorage(SIGIN_DETAILS, JSON.stringify(payload));
        
      } catch (err) {}
    }
  };

  return (
    <Box className={styles.formContainer01}>
      <Box className={styles.containerRow}>
        <Image
          src={LoginLogo}
          alt="Logo"
          width={isMobile ? 190 : 240}
          height={isMobile ? 80 : 95}
          className={styles.loginLogo}
        />

        <Box my={isMobile ? 2 : 4}>
          <Box my={1}>
            <Typography
              fontFamily="Poppins"
              tagType="h4"
              size={isMobile ? 'small' : 'bodyw'}
              textAlign="center"
            >
              Enter your mobile number and verify OTP to get access of your
              account
            </Typography>
          </Box>

          <Box mt={isMobile?2:5}>
            <Typography
              fontFamily="Poppins"
              size={isMobile ? 'body' : 'subtitle'}
              textAlign="center"
              tagType="h3"
              className={styles.lineClass}
            >
              <span className={styles.spanCls}>Login or Sign up</span>
            </Typography>
          </Box>
        </Box>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="phoneNumber"
            control={control}
            rules={{
              required: 'Phone number is required',
              validate: validatePhoneNumber,
            }}
            render={({ field }) => (
              <InputDropdown
                FullWidth
                countries={countryList}
                required={true}
                // borderColor={errors.phoneNumber ? '#eb2416' : '#4C4C4C'} // Conditional border color
                textColor="#fff"
                type="tel"
                // placeholder="Enter your phone number"
                value={field.value}
                onPhoneNumberChange={(e) => {
                  const numericValue = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
                  field.onChange(numericValue);
                  if (validatePhoneNumber(numericValue)) {
                    clearErrors('phoneNumber');
                  }
                }}
                onCountryCodeChange={handleCountryCodeChange}
                countryCode={countryCode}
                error={errors.phoneNumber ? errors.phoneNumber.message : ''}
              />
            )}
          />

          <Box mt={3}>
            <Button fullWidth type="submit">
              <Typography size="btn">Get started</Typography>
            </Button>
          </Box>
        </form>
      </Box>
      <Box mt={3} sx={{ textAlign: 'center' }} onClick={() => setOpen(true)}>
        <Typography
          className={styles.termsText}
          size={isMobile?'small':'body'}
          tagType="h2"
          fontFamily="Poppins"
        >
          By continuing, you agree to our
        </Typography>
        {/* <br /> */}
        <Box className={styles.policy001}>
          <Link
            href="/terms&condition"
            style={{ color: '#FFFFFF', textDecoration: 'underline' }}
            className={styles.condition}
          >
            Terms of service
          </Link>{' '}
          <Link
            href="/privacy&policy"
            style={{ color: '#FFFFFF', textDecoration: 'underline' }}
            className={styles.condition}
          >
            Privacy policy
          </Link>{' '}
          <Link
            href="/contentpolicy"
            style={{ color: '#FFFFFF', textDecoration: 'underline' }}
            className={styles.condition}
          >
            Content policy
          </Link>
        </Box>
      </Box>
     
    </Box>
  );
};

export default memo(LoginSection);
