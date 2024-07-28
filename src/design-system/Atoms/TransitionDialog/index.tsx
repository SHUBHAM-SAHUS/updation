import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Breakpoint } from '@mui/system';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
    direction: 'left' | 'right' | 'up' | 'down';
  },
  ref: React.Ref<unknown>,
) {
  const { direction, ...rest } = props;
  return <Slide direction={direction} ref={ref} {...rest} />;
});

interface TransitionDialogProps extends Omit<DialogProps, 'maxWidth'> {
  open: boolean;
  title: string;
  description: string;
  handleClose: (
    event: object,
    reason: 'backdropClick' | 'escapeKeyDown',
  ) => void;
  handleAgree: () => void;
  handleDisagree: () => void;
  transitionDirection?: 'left' | 'right' | 'up' | 'down';
  ariaDescribedby?: string;
  ariaLabelledby?: string;
  maxWidth?: Breakpoint | false;
  children: any;
}

const TransitionDialog: React.FC<TransitionDialogProps> = ({
  open,
  title,
  description,
  handleClose,
  handleAgree,
  handleDisagree,
  children,
  transitionDirection = 'up',
  ariaDescribedby,
  ariaLabelledby,
  maxWidth = 'sm',
  ...dialogProps
}) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={(props) => (
        <Transition {...props} direction={transitionDirection} />
      )}
      keepMounted
      onClose={handleClose}
      aria-describedby={ariaDescribedby}
      aria-labelledby={ariaLabelledby}
      maxWidth={maxWidth}
      {...dialogProps}
    >
      {children}
    </Dialog>
  );
};

export default TransitionDialog;
