'use client';
import React, { useCallback, useState } from 'react';
import dynamic from 'next/dynamic';
import parentImg from '@/assets/Images/parent.svg';
import caretakerImg from '@/assets/Images/caretaker.svg';
import { useRouter } from 'next/navigation';
import { LANDING_SCREEN_SEEDDATA, profileCards } from '@/utils';
import { useProfileHandler } from '@/hooks/API';

const ProfileTypeTemplate = dynamic(
  () => import('@/design-system/Template/ProfileTypeTemplate'),
  { ssr: false },
);

const CommonTemplate = dynamic(
  () => import('@/design-system/Template/CommonTemplate'),
  { ssr: false },
);



const ProfileType: React.FC = () => {
  const router = useRouter();
    const {
    profileType,
    isProfileTypeLoading,

  } = useProfileHandler();
  const [selectedCardKey, setSelectedCardKey] = useState<string>('');

  const handleCardSelect = (key: string) => {
    setSelectedCardKey(key);
  };



   const handleClick = useCallback(() => {
     if (selectedCardKey) {
       // Navigate based on the selected card key
       if (selectedCardKey === 'parent') {
         const payload = {
           landingScreen: LANDING_SCREEN_SEEDDATA.PROFILE_TYPE,
           profileType: 'PARENT',
         };

         profileType(payload);
       } else {
         // Other logic can go here
       }
     }
   }, [selectedCardKey, profileType]);




  return (
    <>
      <CommonTemplate>
        <ProfileTypeTemplate
          cards={profileCards}
          handleCardSelect={handleCardSelect}
          handleClick={handleClick}
          selectedCardKey={selectedCardKey}
          title="Are you a Parent or Caretaker?"
        />
      </CommonTemplate>
    </>
  );
};

export default ProfileType;
