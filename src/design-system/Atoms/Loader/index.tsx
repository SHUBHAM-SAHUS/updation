import React from 'react';
import styles from './style.module.scss';

interface LoaderProps {
  size?: number;
  color?: string;
}

const Loader: React.FC<LoaderProps> = ({
  size = 80,
  color = 'currentColor',
}) => {
  return (
    <div className={styles.loaderContainer}>
      <div
        className={styles.ldsEllipsis}
        style={{ width: size, height: size, color }}
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
