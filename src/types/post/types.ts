import { IUser } from '../user';
import { POST_VISIBILITY_TYPE } from './constants';

export interface IPost {
  _id: string;
  createdAt: string;
  updatedAt: string;

  user: IUser;
  content: string;
  visibility: POST_VISIBILITY_TYPE;
  commentCount: number;
  likeCount: number;
}

