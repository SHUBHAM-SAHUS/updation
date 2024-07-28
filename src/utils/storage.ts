import Cookies from 'js-cookie';
import { TYPE_UNDEFINED } from './constant';

export const ACCESS_TOKEN_KEY = process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY ?? '';
export const COUNTRYLIST_DETAILS = process.env.NEXT_PUBLIC_COUNTRY_LIST ?? '';
export const SIGIN_DETAILS = process.env.NEXT_PUBLIC_SIGNIN_DETAILS ?? '';

export const SELECT_COUNTRY = process.env.NEXT_PUBLIC_CURRENT_COUNTRY ?? '';

// export const LOCAL_THEME = 'user-theme';
// export const LOCAL_INFO = 'zevo-access-token';

// **** LocalStorage Services ****

export const setItemLocalStorage = (key: string, value: string) => {
  if (typeof window !== TYPE_UNDEFINED) {
    localStorage.setItem(key, value);
  }
};

export const getItemLocalStorage = (key: string) => {
  return typeof window !== TYPE_UNDEFINED ? localStorage.getItem(key) : null;
};

export const removeItemLocalStorage = (key: string): void => {
  if (typeof window !== TYPE_UNDEFINED) {
    localStorage.removeItem(key);
  }
};

export const clearLocalStorage = () => {
  if (typeof window !== TYPE_UNDEFINED) {
    localStorage.clear();
  }
};

export const disableAccessToken = () => {
  if (ACCESS_TOKEN_KEY) {
    // Check if the key is defined
    removeItemLocalStorage(ACCESS_TOKEN_KEY);
    Cookies.remove(ACCESS_TOKEN_KEY);
  }
};

// export const disableUserDetails = () => {
//   removeItemLocalStorage(LOCAL_USER_DETAILS_KEY);
// };

export const checkAccessToken = () => {
  return ACCESS_TOKEN_KEY && typeof window !== TYPE_UNDEFINED
    ? localStorage.getItem(ACCESS_TOKEN_KEY)
    : null;
};
