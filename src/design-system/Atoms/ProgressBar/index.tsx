import React from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  LinearProgress,
  linearProgressClasses,
  Typography,
} from '@mui/material';

interface BorderLinearProgressProps {
  value?: number;
  variant?: 'determinate' | 'indeterminate';
  customColor?: string;
  height?: number;
  width?: 'fullWidth' | 'large' | 'medium' | 'small';
  showLabel?: boolean;
}

const ProgressBar = styled(Box)<{ width: string }>(({ width }) => ({
  width:
    width === 'fullWidth'
      ? '100%'
      : width === 'large'
        ? '75%'
        : width === 'medium'
          ? '50%'
          : '25%',
  display: 'flex',
  alignItems: 'center',
}));

const CustomLinearProgress = styled(LinearProgress, {
  shouldForwardProp: (prop) => prop !== 'customColor' && prop !== 'height',
})<BorderLinearProgressProps>(({ theme, customColor, height }) => ({
  height: height || 10,
  borderRadius: 5,
  flexGrow: 1,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: customColor || theme.palette.primary.main,
  },
}));

const BorderLinearProgress: React.FC<BorderLinearProgressProps> = ({
  value = 0,
  variant = 'determinate',
  customColor,
  height,
  width = 'fullWidth',
  showLabel = true,
}) => {
  return (
    <ProgressBar width={width}>
      <CustomLinearProgress
        variant={variant}
        value={value}
        customColor={customColor}
        height={height}
        sx={{
          [`& .${linearProgressClasses.bar}`]: {
            backgroundColor: customColor,
          },
        }}
      />
      {showLabel && (
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ marginLeft: 1 }}
        >
          {`${Math.round(value)}%`}
        </Typography>
      )}
    </ProgressBar>
  );
};

export default ProgressBar;
