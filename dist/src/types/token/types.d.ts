import { IAuth } from '../auth';
import { IUser } from '../user';
export declare type IToken = Pick<IAuth, 'UUID' | 'userName'> & Pick<IUser, 'roles'>;
