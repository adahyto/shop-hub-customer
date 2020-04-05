import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ILoginRequest } from './../../models/auth';
import * as actions from './user.actions';
import { IUserPartialStore } from './user.reducer';
import * as selectors from './user.selectors';

@Injectable()
export class UserFacade {
    me$ = this.store.pipe(select(selectors.reclaimYourself));
    token$ = this.store.pipe(select(selectors.reclaimToken));

    constructor(private store: Store<IUserPartialStore>) {}

    login = (payload: ILoginRequest): void => {
        const taskId = 'login';
        this.store.dispatch(new actions.UserRequestAction(taskId, payload));
    };
}
