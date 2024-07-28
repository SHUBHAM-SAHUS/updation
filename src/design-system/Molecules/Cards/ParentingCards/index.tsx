import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import styles from './style.module.scss';
import { Image, Typography } from '@/design-system/Atoms';

type CardComponentProps = {
  title?: string;
  description?: string;
  image?: string;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  index: number; // Add an index prop to determine the card order
};

const ProfileTypeCard: React.FC<CardComponentProps> = ({
  title,
  description,
  image,
  active,
  disabled,
  onClick,
  index,
}) => {
  const isMobile = useMediaQuery('(max-width:767px)');

  return (
    <Box
      className={`${styles.card} ${active ? styles.active : ''} ${disabled ? styles.disabled : ''}`}
      onClick={onClick}
    >
      <Box
        className={`${styles.cardContent} ${true ? styles.mobile : styles.desktop}`}
      >
        {true ? (
          <>
            {index % 2 === 0 ? (
              <>
                <Box
                  className={`${styles.cardText}  ${active ? styles.activeText : ''}`}
                >
                  <Typography size="h4">{title}</Typography>
                  {description && (
                    <Typography size="body">{description}</Typography>
                  )}
                </Box>
                <Image
                  src={image}
                  alt={title}
                  className={`${styles.cardImage} ${styles.cardImage_active01}`}
                />
              </>
            ) : (
              <>
                <Image
                  src={image}
                  alt={title}
                  className={`${styles.cardImage}`}
                />
                <Box
                  className={`${styles.cardText} ${active ? styles.activeText : ''}`}
                >
                  <Typography size="h4">{title}</Typography>
                  {/* {description && (
                    <Typography size="body">{description}</Typography>
                  )} */}
                </Box>
              </>
            )}
          </>
        ) : (
          <>
            <Image src={image} alt={title} className={styles.cardImage} />
            <Box
              className={`${styles.cardText} ${active ? styles.activeText : ''}`}
            >
              <Typography
                className={styles.parentCardText}
                fontFamily="Poppins"
              >
                {title}
              </Typography>
              {/* {description && (
                <Typography className={styles.parentCardText}>
                  {description}
                </Typography>
              )} */}
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default ProfileTypeCard;
