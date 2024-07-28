import {
  FaTh,
  FaHome,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
  FaChevronDown,
  FaChevronUp,
} from 'react-icons/fa';
import { BsBarChartFill } from 'react-icons/bs';
import { BiSolidDashboard } from 'react-icons/bi';
import flagIcon from '@/assets/Images/flag.png';
import parentImg from '@/assets/Images/parent.svg';
import caretakerImg from '@/assets/Images/caretaker.svg';
import createtAccount from '@/assets/Images/createaccount.svg';
import pregnantImg from '@/assets/Images/pregnent.svg';
import dadTextColorImage from '@/assets/Images/Super Dad color.svg';
import dadTextNormalImage from '@/assets/Images/Super Dad normal.svg';
import momTextNormalImage from '@/assets/Images/Super Momnormal.svg';
import momTextColorImage from '@/assets/Images/Super Mom color.svg';

interface MenuItem {
  path: string;
  name: string;
  icon?: React.ReactNode;
  subMenu?: MenuItem[];
}

export const SUCCESS_STATUS_CODE: number = 200;
export const SUCCESS_STATUS_MESSAGE: string = 'success';
export const TYPE_UNDEFINED: string = 'undefind';

export const countries = [
  { code: '+91', name: 'India', flag: flagIcon },
  { code: '+1', name: 'USA', flag: flagIcon },
  { code: '+44', name: 'UK', flag: flagIcon },
];

export const API_UNIQUE_KEYS = {
  LoginApi: 'LoginApi',
  CountryDetails: 'CountryDetails',
};

export const LANDING_SCREEN_SEEDDATA = {
  WHC: 'WHC',
  WAP: 'WAP',
  PROFILE_TYPE: 'PROFILE_TYPE',
  FAMILY_ACCOUNT_CREATE: 'FAMILY_ACCOUNT_CREATE',
  PERSONAL_PROFILE_ADD: 'PERSONAL_PROFILE_ADD',
  PROFILE_STATUS_TYPE: 'PROFILE_STATUS_TYPE',
  KID_ADD: 'KID_ADD',
};

export const createAccountsCard = [
  {
    title: 'Create a new account',
    image: createtAccount,
    key: 'createNew',
    disabled: false, // Not disabled
  },
  {
    title: 'Join existing family',
    // description: '(Coming soon)',
    image: caretakerImg,
    key: 'exiting',
    disabled: false, // Disabled
  },
];

export const profileCards = [
  {
    title: 'I am a parent',
    image: parentImg,
    key: 'parent',
    disabled: false, // Not disabled
  },
  {
    title: 'I am a caretaker',
    description: '(Coming soon)',
    image: caretakerImg,
    key: 'caretaker',
    disabled: true, // Disabled
  },
];

export const superCards = [
  {
    title: 'Super Dad',
    key: 'FATHER',
    normalImg: dadTextNormalImage,
    colorImg: dadTextColorImage,
    disabled: false, // Not disabled
  },
  {
    title: 'Super Mom',
    description: '(Coming soon)',
    key: 'MOTHER',
    normalImg: momTextNormalImage,
    colorImg: momTextColorImage,
    disabled: false, // Disabled
  },
];

export const childCards = [
  {
    title: 'We have children',
    image: parentImg,
    key: 'WHC',
    disabled: false,
  },
  {
    title: 'We are pregnant',
    description: '(Coming soon)',
    image: pregnantImg,
    key: 'WAP',
    disabled: true,
  },
];
