'use client';
import React from 'react';
import dynamic from 'next/dynamic';

const AccountCreationTemplate = dynamic(
  () => import('@/design-system/Template/AccountCreationTemplate'),
  { ssr: false },
);

const CommonTemplate = dynamic(
    () => import('@/design-system/Template/CommonTemplate'),
    { ssr: false },
  );

const KidsCreation: React.FC = () => {
  return (
    <>
      <CommonTemplate>
        <AccountCreationTemplate addChildren={true} />
      </CommonTemplate>
    </>
  );
  
  

};

export default KidsCreation;
