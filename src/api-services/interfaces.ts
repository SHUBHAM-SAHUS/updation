export interface UserContact {
  mobile: number;
  mobileNumberPrefix: string;
  countryCode: string;
}

export interface UserContactWithOtp {
  mobile: number;
  mobileNumberPrefix: string;
  countryCode: string;
  otp: number;
}

interface Language {
  name: string;
  id: string;
}

interface Application {
  code: string;
  displayName: string;
}

interface CountryData {
  id: number;
  countryCode: string;
  name: string;
  mobileNumberPrefix: string;
  displayName: string;
  localCurrencyName: string;
  localCurrencySymbol: string;
  flagUrl: string;
  languageList: Language[];
  applicationList: Application[];
  otpAttemptLimit: number;
  otpCooldownLimit: number;
  mobileNumberLengthMax: number;
  mobileNumberLengthMin: number;
  numberOfKidsLimit: number;
  numberOfSpouseLimit: number;
  termAndCondition: string;
  privacyPolicy: string;
  otpExpiryTime: number;
  otpResendTime: number;
  total: number;
}

export interface ApiResponseCountryList {
  statusCode: number;
  status: string;
  message: string;
  data: CountryData[];
}

export interface profileTypePayload {
  landingScreen: string;
  profileType: string;
}
