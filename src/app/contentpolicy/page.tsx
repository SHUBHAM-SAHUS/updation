import dynamic from 'next/dynamic';
import React from 'react';

const ContentPolicy = dynamic(
  () => import('@/design-system/Molecules/ContentPolicy'),
);

const ContentPolicys = () => {
  return (
    <>
      <ContentPolicy />
    </>
  );
};

export default ContentPolicys;
