import { IUser } from '../user';
import { T_FILE_MIME_ENUM_TYPE, T_FILE_VISIBILITY_TYPE } from './constants';
export interface IFile {
    visibility: T_FILE_VISIBILITY_TYPE;
    mimeType: T_FILE_MIME_ENUM_TYPE;
    name: string;
    description: string;
    size: number;
    uploadedBy?: IUser;
    URI: string;
    isDeletable: boolean;
    _id: string;
    createdAt: string;
    updatedAt: string;
}
