import { IUser } from '../user';
export interface IChannel {
    _id: string;
    createdAt: string;
    updatedAt: string;
    members: IUser[];
}
