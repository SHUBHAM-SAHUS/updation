import React, { memo } from 'react';
import { Button as MUIButton } from '@mui/material';
import { styled } from '@mui/system';
import { ButtonProps } from './interfaces';

const CustomButton = styled(MUIButton)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 500,
  textAlign: 'center',
  whiteSpace: 'nowrap',
  verticalAlign: 'middle',
  userSelect: 'none',
  border: '1px solid transparent',
  padding: '1rem 1.7rem',
  fontSize: '1rem',
  lineHeight: 1.5,
  borderRadius: '0.6rem',
  gap: '0.8rem',
  transition:
    'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
  cursor: 'pointer',
  minWidth: '100px',
  minHeight: '40px',
  maxWidth: '100%',
  maxHeight: 'auto',
  '&.button-primary': {
    color: theme.palette.common.black,
    backgroundColor: theme.palette.customColors.white,
    border: `1px solid ${theme.palette.common.black}`,
    boxShadow: `2px 4px 0px 0px ${theme.palette.customColors.purple}`,
    '&:hover': {
      backgroundColor: theme.palette.customColors.purple,
      borderColor: theme.palette.customColors.purple,
      boxShadow: `2px 4px 0px 0px ${theme.palette.customColors.white}`,
      color: theme.palette.text.primary,
      border: `1px solid ${theme.palette.common.black}`,
    },
    '&:disabled': {
      backgroundColor: theme.palette.customColors.disabledColor,
      color: theme.palette.text.white,
      boxShadow: `2px 4px 0px 0px ${theme.palette.customColors.buttonShadow}`,
      opacity: 1,
      cursor: 'not-allowed',
      pointerEvents: 'none',
    },
  },
  '&.button-small': {
    width: '40%',
    padding: '0.70rem 0.6rem',
    fontSize: '0.875rem',
  },
  '&.button-medium': {
    width: '60%',
    padding: '0.9rem 1rem',
    fontSize: '1rem',
  },
  '&.button-large': {
    width: '80%',
    padding: '1rem 2rem',
    fontSize: '1.25rem',
  },
  '&.button-full-width': {
    width: '100% !important',
  },
  '@media (max-width: 768px)': {
    fontSize: '0.875rem',
    '&.button-small': {
      width: '40%',
      padding: '0.0rem 0.6rem',
      fontSize: '0.75rem',
    },
    '&.button-medium': {
      width: '60%',
      padding: '0.8rem 1rem',
      fontSize: '0.875rem',
    },
    '&.button-large': {
      width: '80%',
      padding: '0.8rem 1.25rem',
      fontSize: '1rem',
    },
  },
}));

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  loading = false,
  disabled = false,
  fullWidth = false,
  size = 'medium',
  variant = 'primary',
  withShadow = false,
  icon,
  hoverIcon,
  className = '',
  onClick,
  children,
}) => {
  const classNames = [
    `button-${variant}`,
    `button-${size}`,
    withShadow ? 'button-shadow' : '',
    fullWidth ? 'button-full-width' : '',
    className,
  ].join(' ');

  if (loading) disabled = true;

  return (
    <CustomButton
      className={classNames}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {loading ? <span className="spinner" /> : null}
      {!loading && icon && <span className="icon icon-default">{icon}</span>}
      {!loading && hoverIcon && (
        <span className="icon icon-hover">{hoverIcon}</span>
      )}
      {!loading && children}
    </CustomButton>
  );
};

export default memo(Button);
