import { IAuth } from '../auth';
import { IUser } from '../user';

export type IToken = Pick<IAuth, 'UUID' | 'userName' | '_id'> & Pick<IUser, 'roles'>
