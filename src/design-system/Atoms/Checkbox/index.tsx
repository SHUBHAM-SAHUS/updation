import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import { CheckboxProps } from '@mui/material/Checkbox';

interface CustomCheckboxProps extends CheckboxProps {
  customColor?: string;
}

const StyledCheckbox = styled(Checkbox)<CustomCheckboxProps>(
  ({ theme, customColor }) => ({
    color: customColor || theme.palette.primary.main,
    '&.Mui-checked': {
      color: customColor || theme.palette.primary.main,
    },
  }),
);

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  checked,
  onChange,
  disabled,
  customColor,
  ...props
}) => {
  return (
    <StyledCheckbox
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      customColor={customColor}
      {...props}
    />
  );
};

export default CustomCheckbox;
