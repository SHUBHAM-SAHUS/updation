'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { createAccountsCard } from '@/utils';

const AccountCreationTemplate = dynamic(
  () => import('@/design-system/Template/AccountCreationTemplate'),
  { ssr: false },
);

const CommonTemplate = dynamic(
  () => import('@/design-system/Template/CommonTemplate'),
  { ssr: false },
);



const FamilyAccount: React.FC = () => {
  return (
    <>
      <CommonTemplate>
        <AccountCreationTemplate famiLyAccount={true} cards={createAccountsCard} />
      </CommonTemplate>
    </>
  );
};

export default FamilyAccount;
