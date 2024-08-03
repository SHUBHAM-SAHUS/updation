import React from 'react';
import { Box, Typography } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import styles from './style.module.scss';

type GenderCardProps = {
  title: string;
  normalImage: StaticImageData;
  selectedImage: StaticImageData;
  active: boolean;
  onClick: () => void;
};

const GenderCard: React.FC<GenderCardProps> = ({
  title,
  normalImage,
  selectedImage,
  active,
  onClick,
}) => {
  return (
    <Box
      className={`${styles.card_gender_sec} ${active ? styles.active : ''}`}
      onClick={onClick}
    >
      <Box className={styles.cardContent}>
        <div className={styles.imageWrapper}>
          <Image
            src={active ? selectedImage : normalImage}
            alt={title}
            className={styles.genderImg}
            // layout="fill"
            // objectFit="contain"
          />
        </div>
        <Typography
          variant="h6"
          className={`${styles.cardText} ${active ? styles.activeText : ''}`}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default GenderCard;
