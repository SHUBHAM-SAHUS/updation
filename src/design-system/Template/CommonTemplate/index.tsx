import React, { useState, useCallback, useEffect, Children } from 'react';
import { Grid, Box, useMediaQuery, Container, useTheme } from '@mui/material';
import imagedesktop from '@/assets/Images/desktoploginImg.png';
import mobileImg from '@/assets/Images/mobilelogin.png';
import styles from './style.module.scss';
import backLineImg from '@/assets/Images/bglineImg.svg';
import slide1 from '@/assets/Images/loginbg01.png';
import slide2 from '@/assets/Images/loginbg02.png';
import { countries, COUNTRYLIST_DETAILS, getItemLocalStorage } from '@/utils';
import {
  LoginSection,
  OtpVerificationSection,
} from '@/design-system/Organisms';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useAuthHandler } from '@/hooks/API';
import { useDispatch, useSelector } from 'react-redux';
import { setCountryList } from '@/lib/redux-services/AuthSlice';


interface templateProps {
  isVerification?: boolean;
  children:any
}

const LoginTemplate: React.FC<templateProps> = ({ isVerification,children }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isLogin, setLogin] = useState(true);
  const isPortrait = useMediaQuery('(orientation: portrait)');

  // const isVerification = useSelector(
  //   (state: any) => state.AuthReducer.verifyModal,
  // );

   const theme = useTheme();
   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const getOtpDetails = useCallback((isOtp: boolean, otpDetils: any) => { }, []);
  

  return (
    <Box className={styles.loginPage}>
      <Grid container>
        <Grid
          item
          lg={7}
          md={6}
          xs={12}
          sm={12}
          className={styles.imageCol}
          // px={5}
        >
          {!isMobile?  
          <Box className={styles.imageConatiner}>
            <Grid container>
              <Grid lg={6} md={6} sm={6} xs={6}>
                <Box className={styles.Slide_image}>
                  <Image src={slide1} alt="slide1" />
                </Box>
              </Grid>
              <Grid lg={6} md={6} sm={6} xs={6}>
                <Box className={styles.Slide_image01}>
                  <Image src={slide2} alt="slide2" />
                </Box>
              </Grid>
            </Grid>
          </Box>:''}
          
        </Grid>
        <Grid item lg={5} md={12} xs={12} sm={12} className={styles.formCol}>
          <Box
            className={styles.commonCardsdw}
            px-md={3}
            sx={{
              width: {
                xs: '100%',
                sm: '90%',
                md: '90%',
                lg: '80%',
                xl: '90%',
              },
              maxWidth: {
                xs: '100%',
                sm: '90%',
                md: '90%',
                lg: '90%',
                xl: '90%',
              },
              minWidth: {
                xs: '100%',
                sm: '80%',
                md: '80%',
                lg: '70%',
                xl: '80%',
              },
            }}
          >
            {children}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginTemplate;
