import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import styles from './style.module.scss';
import { Image, Typography } from '@/design-system/Atoms';

type CardComponentProps = {
  title?: string;
  description?: string;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  index?: number; // Add an index prop to determine the card order
  cardData: {
    title: string;
    normalImg: string;
    colorImg: string;
    description?: string;
    disabled: boolean;
  };
};

const SuperCards: React.FC<CardComponentProps> = ({
  active,
  disabled,
  onClick,
  cardData,
}) => {
  const isMobile = useMediaQuery('(max-width:767px)');
  const { title, description, normalImg, colorImg } = cardData;

  return (
    <Box width="100%" px={2}
      className={`${styles.card} ${active ? styles.active : ''} ${disabled ? styles.disabled : ''}`}
      onClick={onClick}
    >
      <Box
        className={`${styles.cardContent} ${isMobile ? styles.mobile : styles.desktop}`}
      >
        <Box
          className={`${styles.cardText} ${active ? styles.activeText : ''}`}
        >
          <Image
            src={active ? colorImg : normalImg}
            alt={title}
            width={100}
            height={100}
            className={styles.image_of_super}
          />
      
        </Box>
      </Box>
    </Box>
  );
};

export default SuperCards;
