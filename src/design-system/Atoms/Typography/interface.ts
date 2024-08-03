export type TypographyVariant = 'DMSerif' | 'Poppins';

export type TypographySize =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'subtitle'
  | 'paragraph'
  | 'body'
  | 'caption'
  | 'small'
  | 'sm'
  | 'md'
  | 'lg'
  | 'btn'
  | 'subtitlew'
  | 'bodyw'
  | 'h6'
  | 'paragraphw'; 

export interface TypographyProps {
  fontFamily?: TypographyVariant;
  size?: TypographySize;
  className?: string;
  children?: React.ReactNode;
  tabIndex?: number;
  color?: string;
  textAlign?: 'left' | 'center' | 'right'; // Add this line
  tagType?:any
}
