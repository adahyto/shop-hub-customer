import { Action } from '@ngrx/store';
import { ILoginRequest, ILoginResponse } from '../../models/auth';
import { IUser } from './../../models/user';
import * as EVENTS from './user.events';

export class UserLoginRequestAction implements Action {
    readonly type = EVENTS.USER_LOGIN_REQUESTED;
    constructor(public taskId: string, public payload: ILoginRequest) {}
}

export class UserLoginResponseAction implements Action {
    readonly type = EVENTS.USER_LOGIN_RECEIVED;
    constructor(public taskId: string, public data: ILoginResponse) {}
}

export class UserRequestAction implements Action {
    readonly type = EVENTS.USER_REQUESTED;
    constructor(public taskId: string) {}
}

export class UserResponseAction implements Action {
    readonly type = EVENTS.USER_RECEIVED;
    constructor(public taskId: string, public data: IUser) {}
}

export type UserActions = UserLoginRequestAction | UserLoginResponseAction | UserRequestAction | UserResponseAction;
