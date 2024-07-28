import React from 'react';
import styles from './style.module.scss';

interface RadioButtonOption {
  label: string;
  value: string;
}

interface RadioButtonProps {
  name: string;
  options: RadioButtonOption[];
  selectedValue?: string | any;
  onChange: (value: string) => void;
  label?: string;
  error?: string | any;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  options,
  selectedValue,
  onChange,
  label,
  error,
}) => {
  return (
    <div className={styles.radioButtonContainer}>
      {/* {label && <label className={styles.label}>{label}</label>} */}

      {label && (
        <label className={styles.label}>
          {label}
          <span className={styles.required}>*</span>
        </label>
      )}

      <div className="d-flex">
        {options.map((option) => (
          <div key={option.value} className="form-check form-check-inline mt-2">
            <input
              className="form-check-input"
              type="radio"
              name={name}
              id={`${name}-${option.value}`}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={() => onChange(option.value)}
            />
            <label
              className="form-check-label"
              htmlFor={`${name}-${option.value}`}
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default RadioButton;
