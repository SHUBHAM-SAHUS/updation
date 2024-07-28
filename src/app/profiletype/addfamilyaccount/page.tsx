'use client';
import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the ProfileTypeTemplate component

const AccountCreationTemplate = dynamic(
  () => import('@/design-system/Template/AccountCreationTemplate'),
  {
    ssr: false,
  },
);

const CommonTemplate = dynamic(
  () => import('@/design-system/Template/CommonTemplate'),
  { ssr: false },
);


const ProfileType: React.FC = () => {
  return (
    <>
      <CommonTemplate>
        <AccountCreationTemplate familyCreation={true} />
      </CommonTemplate>
    </>
  );
};

export default ProfileType;
