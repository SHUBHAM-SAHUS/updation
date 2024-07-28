import { API_ENDPOINTS, getQueries } from '@/utils';
import CoreAPIService from './CoreAPIService';
import { profileTypePayload } from './interfaces';

const {
  PRIVATE: {
    PROFILE_TYPE,
    FAMILY_ACCOUNT_CREATE,
    PERSONAL_DETAILS_CREATION,
    CHILDREN_STATUS,
    ADD_KIDS,
    CURRENT_PAGE_STATUS,
    SEED_DATA,
  },
} = API_ENDPOINTS;

class ProfileServices {
  private services: CoreAPIService;

  constructor() {
    this.services = new CoreAPIService();
  }

  seedData = async () => {
    const endpoint = `${SEED_DATA}`;
    return this.services.get<any>(endpoint);
  };

  currentPageStatus = async () => {
    const endpoint = `${CURRENT_PAGE_STATUS}`;
    return this.services.get<any>(endpoint);
  };

  profileType = async (data: profileTypePayload) => {
    const endpoint = `${PROFILE_TYPE}`;
    return this.services.put(endpoint, data);
  };

  familyAccount = async (data: profileTypePayload) => {
    const endpoint = `${FAMILY_ACCOUNT_CREATE}`;
    return this.services.put(endpoint, data);
  };

  personalAccountCreation = async (data: profileTypePayload) => {
    const endpoint = `${PERSONAL_DETAILS_CREATION}`;
    return this.services.put(endpoint, data);
  };

  childrenCreation = async (data: profileTypePayload) => {
    const endpoint = `${ADD_KIDS}`;
    return this.services.put(endpoint, data);
  };

  childrenStatus = async (data: profileTypePayload) => {
    const endpoint = `${CHILDREN_STATUS}`;
    return this.services.put(endpoint, data);
  };
}

const ProfileService = new ProfileServices();
export default ProfileService;
