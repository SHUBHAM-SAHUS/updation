import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface CustomDialogProps {
  open: boolean;
  onClose: () => void;
  children: any;
}

const CustomDialog: React.FC<CustomDialogProps> = ({
  open,
  onClose,
  children,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
    >
      {children}
    </Dialog>
  );
};

export default CustomDialog;
