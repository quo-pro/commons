import { IUser } from "../user";

export interface IAuth {
  /**
 * Unique ID to identify a user
 */
  UUID: string;
  user: IUser;

  _id: string;
  createdAt: string;
  updatedAt: string;
}
