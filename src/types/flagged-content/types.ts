import { IUser } from '../user';
import { IPost } from '../post';
import { FLAG_REASON_TYPE, FLAG_STATUS_TYPE } from './constants';

export interface IFlaggedContent {
  _id: string;
  createdAt: string;
  flaggedBy: IUser;
  post: IPost;
  reason: FLAG_REASON_TYPE;
  details: string;
  status: FLAG_STATUS_TYPE;
}
