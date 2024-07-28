import React from 'react';
import OtpInput from 'react-otp-input';
import styles from './style.module.scss';

interface OTPInputProps {
  otp?: string;
  setOtp: (otp: string) => void;
  error?: string;
  numInputs?: number;
}

const OTPInput: React.FC<OTPInputProps> = ({
  otp,
  setOtp,
  error,
  numInputs = 4,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.otpContainer}>
        <OtpInput
          value={otp}
          inputType="tel"
          onChange={setOtp}
          numInputs={numInputs}
          renderInput={(props) => (
            <input
              {...props}
              className={
                error ? `${styles.otpInput} ${styles.error}` : styles.otpInput
              }
            />
          )}
        />
      </div>
      {/* {error && <div classN ame={styles.validationMessage}>{error}</div>} */}
    </div>
  );
};

export default OTPInput;
