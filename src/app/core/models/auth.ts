import { IUser } from './user';

export interface ILoginReqUser {
    username: string;
    password: string;
}

export interface ILoginRequest {
    user: ILoginReqUser;
}

export interface ILoginResponse {
    returnedUser: IUser;
    token: string;
}

export interface IRegisterRequest {
    user: IUser;
}

export interface IRegisterResponse {
    _id: string;
}
