import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer, { DrawerProps } from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useSelector } from 'react-redux';

interface CustomDrawerProps extends DrawerProps {
  listItems?: { text: string; icon: JSX.Element }[];
  children?:any
}

const CustomDrawer: React.FC<CustomDrawerProps> = ({
  anchor = 'left',
  open = false,
  onClose,
  listItems,
  children,
  ...otherProps
}) => {

   const isDrawer = useSelector((state: any) => state.profileReducer.isDrawer);
  const handleListClick = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (onClose) {
      onClose(event, 'backdropClick');
    }
  };



  return (
    <Drawer anchor={anchor} open={isDrawer} onClose={onClose} {...otherProps}>
      <Box
        sx={{
          width: '100vw', // Use vw for viewport width
          height: '100vh', // Use vh for viewport height
          // background: 'red', // For testing visibility
        }}
      >
        {children}
      </Box>
    </Drawer>
  );
};

export default CustomDrawer;
