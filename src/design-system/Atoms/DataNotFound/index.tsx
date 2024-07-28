import React from 'react';
import styles from './style.module.scss';

interface DataNotFoundProps {
  message?: string;
}

const DataNotFound: React.FC<DataNotFoundProps> = ({
  message = 'Data not found',
}) => {
  return (
    <div className={styles.dataNotFoundContainer}>
      <p className={styles.message}>{message}</p>
    </div>
  );
};

export default DataNotFound;
