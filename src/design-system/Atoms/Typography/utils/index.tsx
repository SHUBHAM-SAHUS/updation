import { TypographyVariant, TypographySize } from '../interface';

export const getFontFamily = (variant: TypographyVariant): string | any => {
  switch (variant) {
    case 'DMSerif':
      return 'font-DMSerif';
    case 'Poppins':
      return 'font-Poppins';
    // default:
    //   throw new Error('Wrong Typography variant ' + variant);
  }
};

export const getFontSize = (size: TypographySize): string => {
  switch (size) {
    case 'h1':
      return 'text-h1';
    case 'h2':
      return 'text-h2';
    case 'h3':
      return 'text-h3';
    case 'h4':
      return 'text-h4';
    case 'subtitle':
      return 'text-subtitle';
    case 'paragraph':
      return 'text-paragraph';
    case 'body':
      return 'text-body';
    case 'caption':
      return 'text-caption';
    case 'small':
      return 'text-small';
    case 'sm':
      return 'text-sm';
    case 'md':
      return 'text-md';
    case 'lg':
      return 'text-lg';
    case 'btn':
      return 'text-button';
    case 'subtitlew':
      return 'text-subtitle-weight';
    case 'bodyw':
      return 'text-bodyw';
    default:
      throw new Error('Wrong Typography size ' + size);
  }
};
