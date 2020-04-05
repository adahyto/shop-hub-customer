import { ActionReducerMap } from '@ngrx/store';
import { IUserState, userReducer } from './user/user.reducer';

export interface AppState {
    user: IUserState;
}

export const reducers: ActionReducerMap<AppState> = {
  user: userReducer
};
