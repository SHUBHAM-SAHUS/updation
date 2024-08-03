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
    VIEW_PROFILE,
    KIDS_ADD_PROFILE,
    UPDATE_KIDS,
    PROFILE_UPDATE,
    DELETE_KIDS_IMAGE,
    DELETE_PARENT_IMAGE,
    DELETE_KIDS,
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

  profileDetails = async () => {
    const endpoint = `${VIEW_PROFILE}`;
    return this.services.get<any>(endpoint);
  };

  addKidsProfile = async (data: profileTypePayload) => {
    const endpoint = `${KIDS_ADD_PROFILE}`;
    return this.services.post(endpoint, data);
  };

  updateKidsProfile = async (data: profileTypePayload) => {
    const endpoint = `${UPDATE_KIDS}`;
    return this.services.put(endpoint, data);
  };

  updatePersonalProfile = async (data: profileTypePayload) => {
    const endpoint = `${PROFILE_UPDATE}`;
    return this.services.put(endpoint, data);
  };

  Deletekids = async (data: profileTypePayload) => {
    const endpoint = `${DELETE_KIDS}`;
    return this.services.delete(endpoint, data);
  };

  removeKidsImage = async (data: profileTypePayload) => {
    const endpoint = `${DELETE_KIDS_IMAGE}`;
    return this.services.delete(endpoint, data);
  };

  removeParentImage = async (data: profileTypePayload) => {
    const endpoint = `${DELETE_PARENT_IMAGE}`;
    return this.services.delete(endpoint, data);
  };
}

const ProfileService = new ProfileServices();
export default ProfileService;
