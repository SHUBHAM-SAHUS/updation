import { exportTraceState } from 'next/dist/trace';
import { Palette, PaletteOptions } from '@mui/material/styles/createPalette';

export interface childrenProps {
  children?: React.ReactNode;
}

export type AnyObject = any;

type AnyFunction = (...args: any[]) => any;

react - paginate.d.ts;

declare module '@mui/material/styles' {
  interface Palette {
    customColors: {
      purple: string;
      secondaryPurple: string;
      tertiaryPurple: string;
      pink: string;
      green: string;
      yellow: string;
      white: string;
      disabledColor: string;
      buttonShadow: string;
    };
  }

  interface PaletteOptions {
    customColors?: {
      purple?: string;
      secondaryPurple?: string;
      tertiaryPurple?: string;
      pink?: string;
      green?: string;
      yellow?: string;
      white?: string;
      disabledColor: string;
      buttonShadow: string;
    };
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    customColors: true;
  }
}
