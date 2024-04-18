import { IUser } from "../user";
export interface IAuth {
    UUID: string;
    user: IUser;
    _id: string;
    createdAt: string;
    updatedAt: string;
}
