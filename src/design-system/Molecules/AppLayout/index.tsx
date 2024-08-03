'use client'
import React, { ReactNode, useState } from 'react';
import Button from '@mui/material/Button';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import styles from './style.module.scss';
import CustomDrawer from '../CustomDrawer';
import MenuList from '../MenuIist';
import { setDrawer } from '@/lib/redux-services/ProfileSlice';
import { useDispatch } from 'react-redux';
interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  // CONST DIS
  const [drawerOpen, setDrawerOpen] = useState(false);
  const dispatch = useDispatch()

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      // if (
      //   event.type === 'keydown' &&
      //   ((event as React.KeyboardEvent).key === 'Tab' ||
      //     (event as React.KeyboardEvent).key === 'Shift')
      // ) {
      //   return;
      // }

      dispatch(setDrawer(true));
      // setDrawerOpen(open);
    };

  return (
    <div className={styles.appLayout}>
      <header className={styles.appHeader}>
        <Button onClick={toggleDrawer(true)}>Open Drawer</Button>
        <h1>Header</h1>
      </header>
      <CustomDrawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        // listItems={drawerItems}
        elevation={24} // Example of passing additional props
        hideBackdrop={false} // Example of passing additional props
      >
    <MenuList/>
        </CustomDrawer>
      <main className={styles.appContent}>{children}</main>
      <footer className={styles.appFooter}>
        <h1>Footer</h1>
      </footer>
    </div>
  );
};

export default AppLayout;
