import { setDrawer } from '@/lib/redux-services/ProfileSlice';
import React from 'react'
import { useDispatch } from 'react-redux';

const MenuItem = () => {
  const dispatch= useDispatch()

  const handleClosed = () => {
     dispatch(setDrawer(false));
  }

  return <button onClick={handleClosed}> close</button>;
}

export default MenuItem;