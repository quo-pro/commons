import { IUser } from '../user';
import { NOTIFICATION_LIST, NOTIFICATION_STATUS_LIST } from './constants';
export interface INotification {
    _id: string;
    createdAt: string;
    updatedAt: string;
    user: IUser;
    type: NOTIFICATION_TYPE;
    status: NOTIFICATION_STATUS_TYPE;
    ref: string;
    message: string;
}
export declare type NOTIFICATION_TYPE = (typeof NOTIFICATION_LIST)[number];
export declare type NOTIFICATION_STATUS_TYPE = (typeof NOTIFICATION_STATUS_LIST)[number];
