import { IUser } from '../user';
import { FRIEND_REQUEST_STATUS_LIST } from './constants';
export interface IFriendRequest {
    _id: string;
    createdAt: string;
    updatedAt: string;
    senderId: IUser;
    receiverId: IUser;
    status: FRIEND_REQUEST_STATUS_TYPE;
}
export declare type FRIEND_REQUEST_STATUS_TYPE = (typeof FRIEND_REQUEST_STATUS_LIST)[number];
