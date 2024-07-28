'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './style.module.scss';
import notFoundImage from '@/assets/Images/404.svg'; // Adjust the path to your image
import { Button } from '@/design-system/Atoms';

interface PropsTypes {
  isAdmin?: boolean;
}

const CustomNotFound: React.FC<PropsTypes> = ({ isAdmin = false }) => {
  const router = useRouter();

  const handleGoHome = () => {
    if (isAdmin) {
      router.back();
    } else {
      router.push('/');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        {/* <Button
          height="auto"
          width="111px"
          padding="12.73px"
          type="button"
          onClick={handleGoHome}
        >
          Back
        </Button> */}
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={notFoundImage}
          alt="404 Page Not Found"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.content}></div>
    </div>
  );
};

export default CustomNotFound;
