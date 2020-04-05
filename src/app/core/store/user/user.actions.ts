import { Action } from '@ngrx/store';
import { ILoginResponse } from '../../models/auth';
import { ILoginRequest } from './../../models/auth';
import * as EVENTS from './user.events';

export class UserRequestAction implements Action {
    readonly type = EVENTS.USER_REQUESTED;
    constructor(public taskId: string, public payload: ILoginRequest) {}
}

export class UserResponseAction implements Action {
    readonly type = EVENTS.USER_RECEIVED;
    constructor(public taskId: string, public data: ILoginResponse) {}
}

export type UserActions = UserRequestAction | UserResponseAction;
