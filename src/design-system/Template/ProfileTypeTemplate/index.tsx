import React, { useCallback, useState } from 'react';
import { Container, Grid, Box, useMediaQuery } from '@mui/material';
import styles from './style.module.scss';
import { ProfileTypeCard } from '@/design-system/Molecules';
import { Button, Typography } from '@/design-system/Atoms';
import { IoIosArrowBack } from 'react-icons/io';
import { useRouter } from 'next/navigation';
import { useProfileHandler } from '@/hooks/API';
import { LANDING_SCREEN_SEEDDATA } from '@/utils';
import { FaArrowLeft } from 'react-icons/fa6';

type ProfileTypeTemplateProps = {
  cards?: any[];
  handleCardSelect?: (key: string) => void;
  title?: string;
  isChild?: boolean;
  handleClick?: () => void;
  selectedCardKey: string;
};

const ProfileTypeTemplate: React.FC<ProfileTypeTemplateProps> = ({
  cards,
  handleCardSelect,
  handleClick,
  selectedCardKey,
  title,
  isChild =false
}) => {
  const {
    profileType,
    isProfileTypeLoading,
    childProfileType,
    childProfileTypeLoading,
  } = useProfileHandler();
  const router = useRouter();
  const isMobile = useMediaQuery('(max-width:767px)');
  const isTab = useMediaQuery('(max-width:992px)');

  const handleCardClick = useCallback((key: string) => {
    if (!cards?.find((card) => card.key === key)?.disabled) {
      handleCardSelect?.(key);
    }
  }, []);

  return (
    <>
      <Box width="100%">
        {/* <Typography fontFamily="Poppins" size="subtitlew" textAlign="center">
          {title}
        </Typography> */}
        {isTab && (
          <Box
            className="toolbar_mob_res"
            sx={{ display: 'flex' }}
            onClick={() => router.back()}
            justifyContent={isTab ? 'center' : 'start'}
          >
            {<FaArrowLeft size={30} className="arrow01" />}
            <Box>
              <Typography
                className="toolbar_mob_res_heading"
                fontFamily="Poppins"
                size="subtitlew"
                textAlign={isTab ? 'center' : 'left'}
              >
                Select your role
              </Typography>
            </Box>
          </Box>
        )}
        <Box
          sx={{ display: 'flex' }}
          onClick={() => router.back()}
          justifyContent={isTab ? 'center' : 'start'}
          // className="toolbar_mob_res"
        >
          {isChild && <FaArrowLeft size={30} className={styles.arrow01} />}
          <Box ml={isChild ? 2:0}>
            <Typography
              fontFamily="Poppins"
              size="subtitlew"
              textAlign={isTab ? 'center' : 'left'}
            >
              {title}
            </Typography>
          </Box>
        </Box>

        <Box className={styles.mainContainer}>
          <Box>
            <Box className={styles.box_container_scroll}>
              {cards?.map((card, index) => (
                <Box key={card.key}>
                  <ProfileTypeCard
                    index={index} // Pass the index to determine order
                    title={card.title}
                    description={card.description}
                    image={card.image}
                    active={selectedCardKey === card.key}
                    disabled={card.disabled}
                    onClick={() => handleCardClick(card.key)}
                  />
                </Box>
              ))}
            </Box>
          </Box>

          <Box className="btn_fixed_res">
            <Button
              fullWidth
              onClick={() => handleClick?.()}
              disabled={!selectedCardKey}
            >
              <Typography size="btn">Continue</Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProfileTypeTemplate;
