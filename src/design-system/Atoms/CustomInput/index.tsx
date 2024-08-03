import React from 'react';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  TextFieldProps,
  InputAdornment,
  OutlinedInputProps,
} from '@mui/material';
import clsx from 'clsx';
import { useMediaQuery, useTheme } from '@mui/material';
import styles from './style.module.scss'; // Import your SCSS module

interface CustomInputProps extends Omit<TextFieldProps, 'variant'> {
  label?: string;
  required?: boolean;
  error?: boolean;
  helperText?: any;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  defaultValue?: string | number;
  endAdornment?: React.ReactNode;
  isFocus?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  required = false,
  error = false,
  helperText,
  value,
  onChange,
  disabled,
  defaultValue,
  endAdornment,
  isFocus = false,
  ...props
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <FormControl
        variant="outlined"
        className={clsx(styles.inputContainer, { [styles.mobile]: isMobile })}
        error={error}
        disabled={disabled}
        fullWidth
        sx={{
          border: '1px solid',
          borderColor: error ? 'red' : '#ffffff',
          borderRadius: '12px',
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
            {
              outline: 'none !important',
              borderColor: error ? 'red !important' : 'white !important',
              borderWidth: '0px', // Ensure border width does not change
              borderRadius: '12px', // Ensure border radius does not change
            },
          '& .MuiInputLabel-root.Mui-focused': {
            color: error ? 'red !important' : 'white !important',
            outline: 'none !important',
          },
        }}
      >
        {label && (
          <InputLabel
            htmlFor="custom-input"
            className={styles.label}
            shrink
            sx={{
              fontSize: '1.3rem', // Increase the font size
              marginTop: '-6px', // Add margin
              background: '#000 !important',
              padding: '3px',
              color: error ? 'red' : 'white',
              '&.Mui-focused': {
                color: error ? 'red !important' : 'white !important',
              },
            }}
          >
            {label}
            {required && <span className={styles.required}>*</span>}
          </InputLabel>
        )}
        <OutlinedInput
          id="custom-input"
          autoFocus={isFocus}
          value={value}
          autoComplete="off"
          onChange={onChange}
          defaultValue={defaultValue}
          label={label}
          notched={Boolean(label)}
          classes={{
            root: clsx(styles.inputRoot, { [styles.error]: error }),
            notchedOutline: styles.notchedOutline,
            input: styles.input,
          }}
          endAdornment={
            endAdornment && (
              <InputAdornment position="end">{endAdornment}</InputAdornment>
            )
          }
          multiline={false}
          {...(props as OutlinedInputProps)}
          sx={{
            height: '59px',
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: error ? 'red' : 'white',
                borderWidth: '0.1px', // Ensure border width does not change
                borderRadius: '10px', // Ensure border radius does not change
              },
              '&:hover fieldset': {
                borderColor: error ? 'red' : 'none',
              },
              '&.Mui-focused fieldset': {
                borderColor: error ? 'red' : 'none',
              },
              '&.Mui-error fieldset': {
                borderColor: 'red',
              },
            },
            '& .MuiInputBase-root': {
              color: 'white',
            },
            '& .MuiInputBase-input': {
              color: 'white', // Ensure text color remains white when active
              fontSize: '16px', // Maintain font size
            },
            '& .css-185bnpj-MuiInputBase-root-MuiOutlinedInput-root ': {
              borderRadius: '10px',
            },
          }}
        />
      </FormControl>
      {helperText && (
        <FormHelperText className={styles.helperText}>
          {helperText}
        </FormHelperText>
      )}
    </>
  );
};

export default CustomInput;
