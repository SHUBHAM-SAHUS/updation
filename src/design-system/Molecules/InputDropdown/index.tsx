'use client';
import React, { ChangeEvent, FC, useEffect, useState, useRef } from 'react';
import {
  TextField,
  FormControl,
  InputAdornment,
  useMediaQuery,
  Popper,
  PopperProps,
  Autocomplete,
  Paper,
} from '@mui/material';
import { FiChevronDown, FiFlag } from 'react-icons/fi'; // Import FiFlag icon
import Image from 'next/image';
import styles from './style.module.scss';

interface Country {
  mobileNumberPrefix: string;
  code: string;
  name: string;
  flagUrl: string;
  mobileNumberLengthMin: number;
  mobileNumberLengthMax: number;
}

interface InputDropdownProps {
  countries?: Country[];
  variant?: 'fullWidth' | 'mediumWidth' | 'smallWidth';
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  error?: string;
  id?: string;
  name?: string;
  value?: string;
  type?: string;
  placeholder?: string;
  inputMode?: string;
  autoFocus?: boolean;
  onPhoneNumberChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onCountryCodeChange: (code: string) => void;
  countryCode: string;
  [key: string]: any;
}

const InputDropdown: FC<InputDropdownProps> = ({
  countries,
  variant = 'fullWidth',
  backgroundColor = '#121212',
  borderColor = '#666666',
  textColor = '#ffffff',
  error,
  id = 'phone',
  name = 'phone',
  value = '',
  type = 'tel',
  placeholder = '',
  inputMode,
  autoFocus = false,
  onPhoneNumberChange,
  onCountryCodeChange,
  countryCode,
  ...props
}) => {
  const [selectedCountry, setSelectedCountry] = useState<any>(null);
  const [phoneNumber, setPhoneNumber] = useState(value);
  const [validationError, setValidationError] = useState('');
  const [hasInteracted, setHasInteracted] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:767px)');
  const popperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const defaultCountry = countries?.find(
      (country) => country?.mobileNumberPrefix === countryCode,
    );
    setSelectedCountry(defaultCountry || null);
  }, [countries, countryCode]);

  useEffect(() => {
    if (selectedCountry && hasInteracted) {
      validatePhoneNumber(phoneNumber, selectedCountry);
    }
  }, [selectedCountry, phoneNumber, hasInteracted]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popperRef.current &&
        !popperRef.current.contains(event.target as Node) &&
        anchorEl &&
        !anchorEl.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [anchorEl]);

  const handleCountryChange = (event: any, newValue: Country | null) => {
    setHasInteracted(true);
    if (newValue) {
      setSelectedCountry(newValue);
      onCountryCodeChange(newValue?.mobileNumberPrefix);
    } else {
      setSelectedCountry(null);
      onCountryCodeChange('');
    }
  };

  const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    setHasInteracted(true);
    const numericValue = e.target.value.replace(/\D/g, '');
    setPhoneNumber(numericValue);
    onPhoneNumberChange({ ...e, target: { ...e.target, value: numericValue } });
  };

  const validatePhoneNumber = (number: string, country: Country) => {
    const { mobileNumberLengthMin, mobileNumberLengthMax } = country;
    if (
      number.length < mobileNumberLengthMin ||
      number.length > mobileNumberLengthMax
    ) {
      setValidationError('Please enter a valid Phone Number');
      return false;
    }
    setValidationError('');
    return true;
  };

  const getContainerStyles = () => {
    const errorStyle =
      error || (validationError && hasInteracted)
        ? { borderColor: '#eb2416' }
        : { borderColor };
    return {
      backgroundColor,
      ...errorStyle,
    };
  };

  const getLabelStyles = () => {
    const errorStyle =
      error || (validationError && hasInteracted)
        ? { color: '#eb2416' }
        : { color: textColor };
    return {
      backgroundColor,
      ...errorStyle,
    };
  };

  const CustomPopper = (props: PopperProps) => {
    return (
      <Popper
        {...props}
        ref={popperRef}
        sx={{
          width: anchorEl ? anchorEl.clientWidth : 'auto',
          minWidth: { xs: '300px', md: '450px' },
          marginTop: '55px',
          '& .MuiAutocomplete-paper': {
            marginLeft: { xs: '25px', sm: '105px', md: '182px', lg: '180px' },
            marginTop: { xs: '10px', sm: '15px', md: '20px', lg: '25px' },
          },
        }}
      />
    );
  };

  return (
    <div
      className={`${styles.phoneInput} ${
        variant === 'fullWidth'
          ? styles.fullWidth
          : variant === 'mediumWidth'
            ? styles.mediumWidth
            : styles.smallWidth
      }`}
    >
      <div
        className={`${styles.phoneInputContainer} ${
          error || (validationError && hasInteracted) ? styles.error : ''
        }`}
        style={getContainerStyles()}
      >
        <label
          htmlFor={id}
          className={`${styles.phoneLabel} ${
            error || (validationError && hasInteracted) ? styles.errorLabel : ''
          }`}
          style={getLabelStyles()}
        >
          Phone Number{' '}
          {props.required && <span className={styles.required}>*</span>}
        </label>
        <div
          className={`${styles.countryCodeDropdown}`}
          style={{ borderRight: '2px solid white' }}
        >
          <FormControl
            variant="outlined"
            sx={{
              border: 'none',
              minWidth: 'auto',
              verticalAlign: 'middle',
            }}
          >
            <Autocomplete
              sx={{
                padding: '0px',
                marginTop: '21px',
                '& .MuiOutlinedInput-root': { padding: '4px' },
                '& .MuiAutocomplete-endAdornment': {
                  paddingRight: '2px',
                },
                '&.MuiAutocomplete-hasPopupIcon .MuiOutlinedInput-root, &.MuiAutocomplete-hasClearIcon .MuiOutlinedInput-root':
                  {
                    paddingRight: '32px',
                  },
                '& .MuiAutocomplete-input': {
                  display: 'none',
                  border: '1px solid white',
                },
              }}
              options={countries || []}
              getOptionLabel={(option) => option.name}
              onChange={handleCountryChange}
              value={selectedCountry}
              popupIcon={<FiChevronDown color="white" />}
              disableClearable
              open={open}
              onOpen={() => setOpen(true)}
              onClose={() => setOpen(false)}
              PopperComponent={CustomPopper}
              renderOption={(props, option) => (
                <li {...props} className={styles.dropdownItems}>
                  <Image
                    src={option?.flagUrl}
                    alt={`${option.name} flag`}
                    width={45}
                    height={30}
                    className={styles.countryFlag}
                  />
                  <span className={styles.countryName}>{option?.name}</span>
                </li>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  inputProps={{
                    ...params.inputProps,
                    readOnly: true,
                    style: { color: textColor, padding: '4px' },
                  }}
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <InputAdornment position="start">
                        {selectedCountry ? (
                          <Image
                            src={selectedCountry.flagUrl}
                            alt={`${selectedCountry.name} flag`}
                            width={45}
                            height={30}
                            className={styles.countryFlag}
                          />
                        ) : (
                          <FiFlag
                            size={30}
                            className={styles.countryFlag}
                            color="white"
                          />
                        )}
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        sx={{ margin: '0px', padding: '0px' }}
                      >
                        {params.InputProps.endAdornment}
                      </InputAdornment>
                    ),
                    classes: {
                      root: styles.inputRoot,
                      input: styles.inputInput,
                    },
                  }}
                  sx={{
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                  }}
                  inputRef={(input) => setAnchorEl(input)}
                />
              )}
              PaperComponent={(props) => (
                <Paper
                  {...props}
                  sx={{
                    marginLeft: '170px',
                  }}
                />
              )}
            />
          </FormControl>
        </div>
        <span className={styles.separatorIcon}>|</span>
        <div className={styles.phoneNumberContainer}>
          <span className={styles.countryPrefix}>
            {selectedCountry?.mobileNumberPrefix}
          </span>
          <input
            type={type}
            autoComplete="off"
            id={id}
            name={name}
            value={phoneNumber}
            placeholder={placeholder}
            className={styles.phoneInputField}
            pattern="\d*"
            autoFocus={autoFocus}
            onChange={handlePhoneNumberChange}
            onBlur={props.onBlur}
            style={{ color: textColor }}
          />
        </div>
      </div>
      {(error || (validationError && hasInteracted)) && (
        <div className={styles.errorText}>{error || validationError}</div>
      )}
    </div>
  );
};

export default InputDropdown;
