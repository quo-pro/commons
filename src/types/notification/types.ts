import { IUser } from '../user';
import { NOTIFICATION_LIST, NOTIFICATION_STATUS_LIST } from './constants';

export interface INotification {
  _id: string;
  createdAt: string;
  updatedAt: string;

  user: IUser;
  sentBy: IUser;
  type: NOTIFICATION_TYPE;
  status: NOTIFICATION_STATUS_TYPE;
  /**
   * To hold reference to the actual record
   */
  ref: string;
  message: string;
}

export type NOTIFICATION_TYPE = (typeof NOTIFICATION_LIST)[number];
export type NOTIFICATION_STATUS_TYPE = (typeof NOTIFICATION_STATUS_LIST)[number];