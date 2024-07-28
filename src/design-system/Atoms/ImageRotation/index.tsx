import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import React, { memo } from 'react'
import slide1 from '@/assets/Images/loginbg01.png';
import slide2 from '@/assets/Images/loginbg02.png';
import styles from  "./style.module.scss"

const ImageRotation = () => {
    console.count("no")
  return (
    <>
      <Box className={styles.imageConatiner}>
        <Grid container>
          <Grid lg={6}>
            <Box className={styles.Slide_image}>
              <Image src={slide1} alt="slide1" />
            </Box>
          </Grid>
          <Grid lg={6}>
            <Box className={styles.Slide_image01}>
              <Image src={slide2} alt="slide2" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default memo(ImageRotation);