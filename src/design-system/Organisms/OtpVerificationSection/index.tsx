import React, {
  useState,
  useCallback,
  useEffect,
  memo,
  useMemo,
  useRef,
} from 'react';
import { Box, useMediaQuery } from '@mui/material';
import Countdown, { CountdownRenderProps } from 'react-countdown';
import OTPInput from '@/design-system/Atoms/OtpInput';
import { Button, Typography } from '@/design-system/Atoms';
import styles from './style.module.scss';
import { useAuthHandler } from '@/hooks/API';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa6';
import {
  ACCESS_TOKEN_KEY,
  getItemLocalStorage,
  SELECT_COUNTRY,
  setItemLocalStorage,
  SIGIN_DETAILS,
  SUCCESS_STATUS_CODE,
  SUCCESS_STATUS_MESSAGE,
} from '@/utils';
import { toast } from 'react-toastify';
import {
  currentSelectedCountryDetails,
  setOtpDetails,
} from '@/lib/redux-services/AuthSlice';

interface InputFieldComponentProps {
  handleOtpSubmit?: any;
}

const OtpVerificationSection: React.FC<InputFieldComponentProps> = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const otpInfo = getItemLocalStorage(SIGIN_DETAILS);
  const currentCountry = getItemLocalStorage(SELECT_COUNTRY);
  const { otpDetails, currentSelectCountry } = useSelector(
    (state: any) => state.AuthReducer,
  );
  const { verifyLoading, verifyOtp, sendOtp, isOtpLoading } = useAuthHandler();
  const [otp, setOtp] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [resendEnabled, setResendEnabled] = useState<boolean>(true);
  const [resendCount, setResendCount] = useState<number>(0);
  const isMobile = useMediaQuery('(max-width:992px)');
  const countdownStartRef = useRef<number>(Date.now()); // useRef to store initial start time

  useEffect(() => {
    if (otpInfo) {
      try {
        const parsedOtpDetails = JSON.parse(otpInfo);
        dispatch(setOtpDetails(parsedOtpDetails));
      } catch (error) {
        console.error('Failed to parse otpInfo:', error);
      }
    }
    if (currentCountry) {
      try {
        const parsedSelectCountry = JSON.parse(currentCountry);
        dispatch(currentSelectedCountryDetails(parsedSelectCountry));
      } catch (error) {
        console.error('Failed to parse currentCountry:', error);
      }
    }
  }, [otpInfo, currentCountry, dispatch]);

  const handleOtpChange = useCallback(
    (newOtp: string) => {
      setOtp(newOtp);
      if (newOtp.length === 4) {
        const payload = {
          ...otpDetails,
          otp: Number(newOtp),
        };
        verifyOtp(payload, {
          onSuccess: (data) => {
            if (
              data.statusCode === SUCCESS_STATUS_CODE &&
              data.status === SUCCESS_STATUS_MESSAGE
            ) {
              setItemLocalStorage(ACCESS_TOKEN_KEY, data.data.token);
              setError('');
              router.push('/profiletype');
            } else {
              setError('Incorrect OTP');
              setOtp('');
            }
          },
          onError: () => {
            setError('Incorrect OTP');
          },
        });
      }
    },
    [otpDetails, verifyOtp, router],
  );

  const renderer = useCallback(
    ({ minutes, seconds, completed }: CountdownRenderProps) => {
      if (completed) {
        setResendEnabled(false);
        return <Typography size="btn">Resend OTP</Typography>;
      } else {
        return (
          <Typography size="body">
            Resend OTP in {minutes}:{seconds < 10 ? `0${seconds}` : seconds}s
          </Typography>
        );
      }
    },
    [],
  );

  const handleReSendOtp = useCallback(() => {
    if (resendCount < currentSelectCountry.otpAttemptLimit-1) {
      sendOtp(otpDetails);
      setResendEnabled(true);
      setError('');
      setOtp('');
      setResendCount((prevCount) => prevCount + 1);
      countdownStartRef.current = Date.now(); // Reset the countdown start time
    }
  }, [sendOtp, otpDetails, resendCount, currentSelectCountry.otpAttemptLimit]);

  const otpResendTime = useMemo(() => {
    return currentSelectCountry?.otpResendTime * 100; // Changed * 100 to * 1000
  }, [currentSelectCountry?.otpResendTime]);

  return (
    <Box className={`${styles.otpContainer} ${styles.containerRow}`}>
      <Box className={styles.otp_contain_justify}>
        <Box className={styles.otparrow} onClick={() => router.push('/')}>
          <FaArrowLeft size={30} className={styles.arrow01} />
          <Typography fontFamily="Poppins" size="subtitlew" textAlign="left">
            OTP Verification
          </Typography>
        </Box>
        <Box mt={isMobile ? 2 : 4} px={2}>
          <Typography
            fontFamily="Poppins"
            size={isMobile ? 'small' : 'bodyw'}
            textAlign="left"
          >
            Enter the verification code sent to your registered mobile number
            <Box component="strong">
              {otpDetails.mobileNumberPrefix} {otpDetails.mobile}
            </Box>
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: { md: 'flex-start' },
          }}
          mt={isMobile ? 2 : 4}
        >
          <OTPInput
            otp={otp}
            setOtp={handleOtpChange}
            error={error}
            numInputs={4}
          />
        </Box>
        <Box mt={4}>
          <Box className={styles.resendSection} mb={2}>
            <Typography
              fontFamily="Poppins"
              size="body"
              className={error && styles.otpIncorrect}
              textAlign="center"
            >
              {error && 'OTP Incorrect'}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Button
        fullWidth
        type="submit"
        disabled={
          resendEnabled || resendCount >= currentSelectCountry.otpAttemptLimit-1
        }
        onClick={handleReSendOtp}
      >
        {resendEnabled ? (
          <Typography fontFamily="Poppins" size="btn" color="white">
            <Countdown
              date={countdownStartRef.current + otpResendTime}
              renderer={renderer}
            />
          </Typography>
        ) : (
          <Typography size="btn">Resend OTP</Typography>
        )}
      </Button>
      <Box></Box>
    </Box>
  );
};

export default memo(OtpVerificationSection);
