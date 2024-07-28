import React from 'react';
import styles from './style.module.scss';

const InputField = () => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor="input" className={styles.inputLabel}>
        Label <span className={styles.required}>*</span>
      </label>
      <input
        type="text"
        id="input"
        className={styles.styledInput}
        placeholder="Input Text"
      />
    </div>
  );
};

export default InputField;
