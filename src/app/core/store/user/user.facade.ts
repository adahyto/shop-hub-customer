import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ILoginRequest } from './../../models/auth';
import * as actions from './user.actions';
import { IUserPartialStore } from './user.reducer';
import * as selectors from './user.selectors';

@Injectable()
export class UserFacade {
    me$ = this.store.pipe(select(selectors.getYourself));
    token$ = this.store.pipe(select(selectors.getToken));

    constructor(private store: Store<IUserPartialStore>) {}

    reclaimIdentity = (): void => {
        const taskId = 'reclaim-identity';
        this.store.dispatch(new actions.UserRequestAction(taskId));
    };

    login = (payload: ILoginRequest): void => {
        const taskId = 'login';
        this.store.dispatch(new actions.UserLoginRequestAction(taskId, payload));
    };
}
