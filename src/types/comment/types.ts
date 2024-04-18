import { IUser } from '../user';

export interface IComment {
  _id: string;
  createdAt: string;
  updatedAt: string;

  user: IUser;
  content: string;
}
