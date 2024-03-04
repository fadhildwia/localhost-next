import { BaseResponseInterface, MetaResponseInterface } from './BaseResponseInterface';

export type LanguageType = 'en' | 'id';

export interface PostBodyLoginInterface {
  email: string;
  password: string;
  lang: LanguageType;
}

export interface LoginErrorResponse {
  email?: string[];
  password?: string[];
}

export interface PostBodyResetPasswordInterface {
  password: string;
  token: string;
  lang: LanguageType;
}

export interface PostBodyForgotPasswordInterface {
  email: string;
  lang: LanguageType;
}

export interface UserAuthContextValueInterface {
  access_token: string;
  refresh_token: string | null;
}

export interface UserAuthInterface extends UserAuthContextValueInterface {
  expire_token: number | null;
}

export interface ResponseLoginInterface extends UserAuthInterface, BaseResponseInterface {}

export interface UserGroupsInterface {
  id: string;
  name: string;
  logo: string;
  companies: Array<UserCompaniesInterface>;
}

export interface DataMeInterface {
  id: string;
  name: string;
  firstName: string;
  lastName: string;
  phone: string;
  profilePicture: string;
  email: string;
  hasPin: boolean;
  companies: UserCompaniesInterface[];
  storefronts: string[];
  permissions: string[];
  identityNumber: string;
  redirectAfterLogin: string;
  partner?: string;
  lang: 'en' | 'id';
  role: string;
}

export interface MeInterface {
  data: DataMeInterface;
}

export interface ResponseMeInterface extends MeInterface, BaseResponseInterface {}

export interface PostBodyRefreshTokenInterface {
  token: string | undefined | null;
}

export interface BranchInterface {
  clientId: string;
  id: string;
  name: string;
  teamLeader?: string;
  teamMembersCount?: number;
}

export interface UserCompaniesInterface extends BranchInterface {
  isActive: boolean | null;
  logo: string;
  slug: string;
}

export interface SelectCompanyFormikInterface {
  company: string;
  sort: string;
}

export interface ParamsGetUserCompanies {
  sort?: string;
  name?: string;
}

export interface ResponseUserCompanies {
  mainCompany: UserCompaniesInterface;
  companies: UserCompaniesInterface[];
}

export interface DataMeRefreshTokenInterface {
  refreshToken: string;
}

export interface MeRefreshTokenInterface {
  data: DataMeRefreshTokenInterface;
}

export interface ResponseMeRefreshTokenInterface
  extends MeRefreshTokenInterface,
    BaseResponseInterface {}

export interface ResponseAdminSidebar {
  error: boolean;
  data: string[];
}

export interface BranchLocationInterface {
  address: string;
  cityMinWage: number;
  code: string;
  companyName: string;
  companyPhoto: string;
  companyPicName: string;
  contactNumber: string;
  email: string;
  id: string;
  isDefault: boolean;
  isSalaryWithTransferFee: number;
  latitude: number;
  longitude: number;
  name: string;
  photo: string;
  restrictionDistance: number;
  restrictionEnabled: boolean;
}

export interface CompaniesLocationInterface {
  data: Array<BranchLocationInterface>;
  meta?: MetaResponseInterface;
}
