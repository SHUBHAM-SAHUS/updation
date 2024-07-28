import { API_ENDPOINTS, getQueries } from '@/utils';
import CoreAPIService from './CoreAPIService';
import {
  ApiResponseCountryList,
  UserContact,
  UserContactWithOtp,
} from './interfaces';

const {
  AUTH: { COUNTRY_DETAILS, SEND_OTP, VERIFY_OTP },
} = API_ENDPOINTS;
// ******  TODO: 'COUNTRY API SERVICES'********
class AuthServices {
  private services: CoreAPIService;

  constructor() {
    this.services = new CoreAPIService();
  }

  sendOtp = async (data: UserContact) => {
    const endpoint = `${SEND_OTP}`;
    return this.services.post<any>(endpoint, data);
  };

  verifyOtp = async (data: UserContactWithOtp) => {
    const endpoint = `${VERIFY_OTP}`;
    return this.services.post<any>(endpoint, data);
  };

  countryList = async () => {
    const endpoint = `${COUNTRY_DETAILS}`;
    return this.services.get<ApiResponseCountryList>(endpoint);
  };
}

const authService = new AuthServices();
export default authService;
