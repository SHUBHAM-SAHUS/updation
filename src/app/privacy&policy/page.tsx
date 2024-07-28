import dynamic from 'next/dynamic';
import React from 'react';

const PrivacyPolicy = dynamic(
  () => import('@/design-system/Molecules/PrivacyPolicy'),
);

const PrivacyPolicys = () => {
  return (
    <>
      <PrivacyPolicy />
    </>
  );
};

export default PrivacyPolicys;
