'use client';
import dynamic from 'next/dynamic';
import React from 'react';

const TermsCondition = dynamic(
  () => import('@/design-system/Molecules/TermsCondition'),
);

const TermsConditions = () => {
  return (
    <>
      <TermsCondition />
    </>
  );
};

export default TermsConditions;
