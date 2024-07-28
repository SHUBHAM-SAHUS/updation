'use client';
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useAuthHandler } from '@/hooks/API';

// Dynamically import the LoginTemplate component
const LoginTemplate = dynamic(
  () => import('@/design-system/Template/LoginTemplate'),
  { ssr: false },
);

export default function Home() {
  const { countryList, countryLoading } = useAuthHandler();
 

  return (
    <>
      <LoginTemplate isVerification={false} />
    </>
  );
}
