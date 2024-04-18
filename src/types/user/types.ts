import { USER_ROLES_TYPE } from './constants';

export interface IUser {
  _id: string;
  createdAt: string;
  updatedAt: string;

  email: string;
  roles: USER_ROLES_TYPE[];
  displayName: string;
  profilePhoto: string;
  emailVerified: boolean;
  isActive: boolean;
  eulaAccepted: boolean;
}


