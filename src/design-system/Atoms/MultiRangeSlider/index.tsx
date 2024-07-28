import React from 'react';
import { Box, Slider } from '@mui/material';
import { styled } from '@mui/system';

interface MultiRangeSliderProps {
  min?: number;
  max?: number;
  step?: number;
  value?: number[];
  onChange?: (
    event: Event,
    newValue: number | number[],
    activeThumb: number,
  ) => void;
  color?: string;
  width?: 'fullWidth' | 'large' | 'medium' | 'small';
  disableSwap?: boolean;
}

const SliderContainer = styled(Box)<{ width: string }>(({ width }) => ({
  width:
    width === 'fullWidth'
      ? '100%'
      : width === 'large'
        ? '75%'
        : width === 'medium'
          ? '50%'
          : '25%',
}));

const MultiRangeSlider: React.FC<MultiRangeSliderProps> = ({
  min = 0,
  max = 100,
  step = 1,
  value = [0, 100],
  onChange = () => {},
  color,
  width = 'fullWidth',
  disableSwap = false,
}) => {
  return (
    <SliderContainer width={width}>
      <Slider
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        valueLabelDisplay="auto"
        disableSwap={disableSwap}
        sx={{
          color: color || 'primary',
          '& .MuiSlider-thumb': {
            backgroundColor: color,
          },
          '& .MuiSlider-track': {
            backgroundColor: color,
          },
          '& .MuiSlider-rail': {
            backgroundColor: color ? `${color}50` : undefined,
          },
        }}
      />
    </SliderContainer>
  );
};

export default MultiRangeSlider;
