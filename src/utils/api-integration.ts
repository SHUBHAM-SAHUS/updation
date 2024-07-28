export const API_ENDPOINTS = {
  AUTH: {
    COUNTRY_DETAILS: '/auth/api/v1/countries',
    SEND_OTP: '/auth/api/v1/sendOTP',
    VERIFY_OTP: '/auth/api/v1/verifyOtp',
  },

  PRIVATE: {
    PROFILE_TYPE: '/profile/api/v1/profile-type',
    FAMILY_ACCOUNT_CREATE: '/profile/api/v1/family-screen',
    PERSONAL_DETAILS_CREATION: 'profile/api/v1/personal-detail',
    CHILDREN_STATUS: '/profile/api/v1/profile-Status-Type',
    ADD_KIDS: '/profile/api/v1/kids',
    CURRENT_PAGE_STATUS: '/profile/api/v1/profiles',
    SEED_DATA: '/profile/api/v1/seed-data',
  },
  PUBLIC: {},
} as const;

export const QUERIES = {
  AUTH: {
    NONCE: '',
    VERIFY_SIGNATURE: '',
  },
  CATEGORY: {
    ALL: '',
  },
} as const;

export const getQueries = (obj: any): string => {
  return Object.keys(obj ?? {}).reduce(
    (val, key, idx) =>
      obj[key]
        ? `${val}${key}=${obj[key]}${Object.keys(obj).length - 1 !== idx ? '&' : ''}`
        : val,
    '',
  );
};

export const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;
