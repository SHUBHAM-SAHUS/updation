import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Avatar from '@mui/material/Avatar';
import styles from './style.module.scss';
// import whiteTextLogo from '@/assets/Images/whiteTextlogo.svg';
import NavigationButtons from '../NavigationButtons';
import { MenuDropdown } from '@/design-system/Molecules';

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {};

  const menuItems = [
    {
      label: 'Profile',
      // icon: <Avatar alt="Profile" src="/path/to/avatar.png" />,
      onClick: handleProfileClick,
    },
    { label: 'Language settings', onClick: handleProfileClick },
    { label: 'Log out', onClick: handleProfileClick },
  ];

  return (
    <AppBar position="static" className={styles.header}>
      <Toolbar className={styles.toolbar}>
        <IconButton
          edge="start"
          className={styles.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        {/* <img src={whiteTextLogo.src} alt="Zevo Logo" className={styles.logo} /> */}
        <div className={styles.navButtons}>
          <NavigationButtons />
        </div>
        {/* <div className={styles.profile}>
          <Avatar alt="Subrahmanya" src="/path/to/avatar.png" />
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleMenu}
            endIcon={<ArrowDropDownIcon />}
            className={styles.profileButton}
          >
            Subrahmanya
          </Button>
         
        </div> */}
        <MenuDropdown
          buttonLabel="Subrahmanya"
          menuItems={menuItems}
          className={styles.profileButton}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
