import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import * as actions from './user.actions';
import * as EVENTS from './user.events';

@Injectable({ providedIn: 'root' })
export class UserEffects {
    constructor(private authService: AuthService, private actions$: Actions) {}

    @Effect() login$ = this.actions$.pipe(
        ofType<actions.UserRequestAction>(EVENTS.USER_REQUESTED),
        switchMap(({ taskId, payload }) =>
            this.authService.signIn(payload).pipe(map((response) => new actions.UserResponseAction(taskId, response))),
        ),
    );
}
