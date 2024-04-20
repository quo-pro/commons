import { IUser } from '../user';
export interface IBlockedUser {
    _id: string;
    createdAt: string;
    updatedAt: string;
    blockedUser: IUser;
    blockedBy: IUser;
}
