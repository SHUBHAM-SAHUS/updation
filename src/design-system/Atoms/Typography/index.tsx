import React, { memo } from 'react';
import styles from './styles.module.scss';
import { getFontFamily, getFontSize } from './utils';
import { TypographyProps } from './interface';
import { Box } from '@mui/material';

const Typography: React.FC<TypographyProps> = ({
  fontFamily = 'Poppins',
  color,
  size,
  className = '',
  children,
  tabIndex,
  textAlign,
  tagType = '', // Default to 'span' if no tagType is provided
}) => {
  const classNames = [
    fontFamily && styles[getFontFamily(fontFamily)],
    size && styles[getFontSize(size)],
    className,
  ].join(' ');

  return (
    <Box
      component={tagType}
      className={classNames}
      style={{ color, textAlign }} // Add textAlign here
      tabIndex={tabIndex}
    >
      {children}
    </Box>
  );
};

export default memo(Typography);
