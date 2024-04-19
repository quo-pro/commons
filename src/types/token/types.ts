import { IAuth } from '../auth';
import { IUser } from '../user';

export type IToken = Pick<IAuth, 'UUID' | 'userName'> & Pick<IUser, 'roles'>
