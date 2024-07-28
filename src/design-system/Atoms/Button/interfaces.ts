export type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  size?: 'small' | 'medium' | 'large';
  variant?: 'solid' | 'outlined';
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';
  withShadow?: boolean;
  icon?: React.ReactNode;
  hoverIcon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
};
