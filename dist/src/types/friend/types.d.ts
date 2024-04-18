import { IUser } from '../user';
import { FRIEND_STATUS_LIST } from './constants';
export interface IFriend {
    _id: string;
    createdAt: string;
    updatedAt: string;
    user: IUser;
    friend: IUser;
    status: FRIEND_STATUS_TYPE;
}
export declare type FRIEND_STATUS_TYPE = (typeof FRIEND_STATUS_LIST)[number];
