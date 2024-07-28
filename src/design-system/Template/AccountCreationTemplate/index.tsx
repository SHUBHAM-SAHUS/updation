import React, { useState, useCallback } from 'react';
import { Grid, Box } from '@mui/material';
import styles from './style.module.scss';
import {
  AddChildren,
  FamilyAccount,
  LoginSection,
  OtpVerificationSection,
  PersonalDetailsCreation,
} from '@/design-system/Organisms';
import { Image } from '@/design-system/Atoms';

type ProfileTypeProps = {
  famiLyAccount?: boolean;
  familyCreation?: boolean;
  addChildren?: boolean;
  cards?:any
};

const AccountCreationTemplate: React.FC<ProfileTypeProps> = ({
  famiLyAccount = false,
  familyCreation = false,
  addChildren = false,
  cards,
}) => {
  return (
    <Box>
      {famiLyAccount ? (
        <FamilyAccount cards={cards} />
      ) : familyCreation ? (
        <PersonalDetailsCreation />
      ) : addChildren ? (
        <AddChildren />
      ) : (
        ''
      )}
    </Box>
  );
};

export default AccountCreationTemplate;
