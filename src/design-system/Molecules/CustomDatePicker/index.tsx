import React, { useState, useRef } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import clsx from 'clsx';
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import {
  TextField,
  TextFieldProps,
  InputLabel,
  FormControl,
  FormHelperText,
} from '@mui/material';
import styles from './style.module.scss'; // Import your SCSS module

interface CustomDatePickerProps extends DatePickerProps<Dayjs> {
  label?: string;
  required?: boolean;
  helperText?: any;
  error?: boolean;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  label = 'Select Date',
  required = false,
  helperText,
  error = false,
  value,
  onChange,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOpenPicker = () => {
    setOpen(true);
  };

  const handleClosePicker = () => {
    setOpen(false);
  };

  const renderInput = (params: TextFieldProps) => (
    <TextField
      {...params}
      variant="outlined"
      inputRef={inputRef}
      InputLabelProps={{
        shrink: true,
      }}
      className={clsx(styles.textField, {
        [styles.error]: error,
      })}
      sx={{
        '& .MuiOutlinedInput-root': {
          border: error ? '1px solid red' : '1px solid white',
          borderRadius: '2px',
          '&.Mui-focused fieldset': {
            borderColor: error ? 'red' : 'white',
          },
        },
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: error ? 'red' : 'white !important',
        },
      }}
    />
  );

  return (
    <>
      <FormControl
        variant="outlined"
        className={clsx(
          styles.datePickerContainer,
          'MuiFormControl-root MuiFormControl-fullWidth',
        )}
        error={error}
        fullWidth
        onClick={handleOpenPicker}
        sx={{
          border: error ? '1px solid red' : '1px solid white',
          borderRadius: '2px',
          '&.Mui-focused': {
            borderColor: 'white !important',
          },
        }}
      >
        {label && (
          <InputLabel
            htmlFor="custom-date-picker"
            shrink
            className={styles.label}
          >
            {label}
            {required && <span className={styles.required}>*</span>}
          </InputLabel>
        )}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            value={value}
            onChange={onChange}
            open={open}
            onOpen={handleOpenPicker}
            onClose={handleClosePicker}
            format="DD/MMM/YYYY" // Custom date format
            // renderInput={renderInput}
            slots={{}}
            slotProps={{
              popper: {
                sx: {
                  '& .MuiPaper-root': {
                    backgroundColor: '#ffffff', // Set your custom background color here
                    border: '1px solid white', // Set the border color to white
                  },
                  '& .MuiPickersDay-root': {
                    color: 'black', // Set the text color here
                  },
                  '& .MuiPickersDay-today': {
                    border: '1px solid #9b59b6', // Customize today's date border color
                  },
                  '& .MuiPickersDay-selected': {
                    backgroundColor: '#9b59b6 !important', // Customize selected date background color
                    color: 'white !important', // Customize selected date text color
                  },
                  '& .MuiPickersDay-dayOutsideMonth': {
                    color: '#888', // Customize the color of days outside the current month
                  },
                  '& .MuiTypography-root': {
                    color: 'black !important', // Ensure the year label text color is black
                  },
                  '& .MuiPickersYear-yearButton': {
                    color: 'black !important', // Ensure the year button text color is black
                  },
                  '& .MuiYearPicker-root .MuiPickersYear-yearButton': {
                    color: 'black !important', // Ensure the year button text color is black
                  },
                  '& .MuiPickersYear-root .MuiTypography-root': {
                    color: 'black !important', // Ensure the year label text color is black
                  },
                  '& .MuiPickersYear-yearButton.Mui-selected': {
                    color: 'black !important', // Ensure selected year button text color is black
                  },
                  '& .MuiTypography-caption': {
                    color: 'black !important', // Ensure the year navigation text color is black
                  },
                  '& .MuiPickersCalendarHeader-label': {
                    color: 'black !important', // Ensure the calendar header label text color is black
                  },
                },
              },
            }}
            {...props}
          />
        </LocalizationProvider>
      </FormControl>
      {error && helperText && (
        <FormHelperText className={styles.helperText}>
          {helperText}
        </FormHelperText>
      )}
    </>
  );
};

export default CustomDatePicker;
