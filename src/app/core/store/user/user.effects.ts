import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { UserService } from './../../services/user.service';
import * as actions from './user.actions';
import * as EVENTS from './user.events';

@Injectable({ providedIn: 'root' })
export class UserEffects {
    constructor(private authService: AuthService, private userService: UserService, private actions$: Actions) {}

    @Effect() login$ = this.actions$.pipe(
        ofType<actions.UserLoginRequestAction>(EVENTS.USER_LOGIN_REQUESTED),
        switchMap(({ taskId, payload }) =>
            this.authService.signIn(payload).pipe(map((response) => new actions.UserLoginResponseAction(taskId, response))),
        ),
    );

    @Effect() reclaimIdentity$ = this.actions$.pipe(
        ofType<actions.UserRequestAction>(EVENTS.USER_REQUESTED),
        switchMap(({ taskId }) => this.userService.me().pipe(map((response) => new actions.UserResponseAction(taskId, response)))),
    );
}
