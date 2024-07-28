import React, { useState, useRef } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import {
  TextField,
  TextFieldProps,
  InputLabel,
  FormControl,
  FormHelperText,
} from '@mui/material';
import clsx from 'clsx';
import styles from './style.module.scss'; // Import your SCSS module

interface CustomDatePickerProps
  extends Omit<DatePickerProps<Dayjs>, 'renderInput'> {
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
      placeholder="DD/MMM/YYYY"
      InputLabelProps={{
        shrink: true,
      }}
      className={clsx(styles.textField, {
        [styles.error]: error,
      })}
      onClick={handleOpenPicker} // Open calendar on click
      sx={{
        height: '59px', // Set height
        '& .MuiOutlinedInput-root': {
          border: error ? '1px solid red' : '1px solid white',
          borderRadius: '10px !important', // Set border radius
          '&.Mui-focused fieldset': {
            borderColor: error ? 'red' : 'white !important',
            borderWidth: '1px !important', // Ensure border width does not change
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
        onClick={handleOpenPicker} // Ensure FormControl also opens the calendar
        sx={{
          border: error ? '1px solid red' : '1px solid white',
          borderRadius: '10px', // Set border radius
          height: '59px', // Set height
          '& .MuiOutlinedInput-root.Mui-focused': {
            borderColor: 'white !important',
            borderWidth: '1px !important', // Ensure border width does not change
          },
        }}
      >
        {label && (
          <InputLabel
            htmlFor="custom-date-picker"
            shrink
            className={styles.label}
            sx={{
              fontSize: '1.3rem', // Increase the font size
              marginTop: '-6px', // Add margin
              background: '#000',
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
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            value={value}
            onChange={onChange}
            open={open}
            onOpen={handleOpenPicker}
            onClose={handleClosePicker}
            format="DD/MMM/YYYY" // Custom date format
            renderInput={renderInput}
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
