'use client';
import React, { useCallback, useState } from 'react';
import dynamic from 'next/dynamic';
import parentImg from '@/assets/Images/parent.svg';
import { useRouter } from 'next/navigation';
import { childCards, LANDING_SCREEN_SEEDDATA } from '@/utils';
import { useProfileHandler } from '@/hooks/API';

 const CommonTemplate = dynamic(
   () => import('@/design-system/Template/CommonTemplate'),
   { ssr: false },
 );

 const ProfileTypeTemplate = dynamic(
   () => import('@/design-system/Template/ProfileTypeTemplate'),
   { ssr: false },
 );





const ProfileType: React.FC = () => {
  const router = useRouter();
  const { childProfileType, childProfileTypeLoading } = useProfileHandler();
  const [selectedCardKey, setSelectedCardKey] = useState<string>('');

  const handleCardSelect = (key: string) => {
    setSelectedCardKey(key);
  };




   const handleClick = useCallback(() => {
     if (selectedCardKey) {
       console.log('Selected card key:', selectedCardKey);
       // Navigate based on the selected card key
    if (selectedCardKey === 'WHC') {
      debugger;
      const payload = {
        landingScreen: LANDING_SCREEN_SEEDDATA.PROFILE_STATUS_TYPE,
        profileStatusType: 'WHC',
      };

      childProfileType(payload);
    } else {
    }
     }
   }, [selectedCardKey, ]);


 


  return (
    <>
      <CommonTemplate>
        <ProfileTypeTemplate
          cards={childCards}
          handleCardSelect={handleCardSelect}
          handleClick={handleClick}
          selectedCardKey={selectedCardKey}
          title="What brings you to Zevo?"
        />
      </CommonTemplate>
    </>
  );
};

export default ProfileType;
