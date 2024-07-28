'use client';
import React, { FC, useState } from 'react';
import Multiselect from 'multiselect-react-dropdown';
import { IconType } from 'react-icons';
import { FaChevronDown } from 'react-icons/fa';
import styles from './style.module.scss';

interface Option {
  key: string;
  value: string;
}

interface MultiSelectProps {
  options: Option[];
  selectedValues: Option[];
  onSelect: (selectedList: Option[]) => void;
  onRemove: (selectedList: Option[]) => void;
  placeholder?: string;
  dropdownIcon?: IconType;
  showCheckbox?: boolean;
  label?: string;
  error?: string | any; // Added error prop
  labelClass?: string;
  customArrow?: any;
}

const MultiSelect: FC<MultiSelectProps> = ({
  options,
  selectedValues,
  onSelect,
  onRemove,
  placeholder = 'Select...',
  dropdownIcon: DropdownIcon = FaChevronDown,
  showCheckbox = true,
  label = '',
  error = '', // Default to empty string
  labelClass = '',
  customArrow,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const appliedClass = labelClass ? styles[labelClass] : styles.label;

  return (
    <div className={styles.multiSelectContainer}>
      {label && (
        <label className={appliedClass}>
          {label}
          <span className={styles.required}>*</span>
        </label>
      )}
      <div
        className={`${styles.searchBox} ${isFocused ? styles.active : ''} ${error ? styles.errorBorder : ''}`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        <Multiselect
          options={options}
          selectedValues={selectedValues}
          onSelect={onSelect}
          onRemove={onRemove}
          displayValue="value"
          placeholder={placeholder}
          closeIcon="cancel"
          customArrow={customArrow}
          showCheckbox={showCheckbox}
          style={{
            chips: {
              background: '#794aff', // Purple background for chips
              color: '#ffffff', // White text for chips
              borderRadius: '8px', // Border radius for chips
            },
            searchBox: {
              border: 'none', // Remove default border style
              borderRadius: '20px',
              padding: '10px',
              '::placeholder': {
                fontSize: '15px', // Adjust placeholder font size here
                color: '#9ca3af',
              },
            },
            multiselectContainer: {
              color: '#374151',
              borderRadius: '20px',
            },
            option: {
              backgroundColor: '#FDFEFE', // Purple background for options
              color: '#1E1D1C', // White text for options
              '&:hover': {
                backgroundColor: '#794aff', // Light color for hover
                color: '#ffffff', // White text for hover
              },
            },
          }}
        />
      </div>
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default MultiSelect;
