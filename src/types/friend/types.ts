import { IUser } from '../user';

export interface IFriend {
  _id: string;
  createdAt: string;
  updatedAt: string;

  user: IUser;
  friend: IUser;
}