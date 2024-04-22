import { IChannel } from '../channel';
import { IFile } from '../file';
import { IUser } from '../user';
import { T_MESSAGE_STATUS } from './constants';
export interface IMessage {
    _id: string;
    createdAt: string;
    updatedAt: string;
    channel: IChannel;
    from: IUser;
    attachments: Array<IFile>;
    message: string;
    transitions: IMessageTransition[];
}
export interface IMessageTransition {
    date: Date;
    status: T_MESSAGE_STATUS;
    prompt: T_MESSAGE_STATUS;
    note: string;
}
