import { IUser } from '../../models/user';
import { CommonUtility } from './../../utils/commonUtility';
import { UserActions } from './user.actions';
import * as EVENTS from './user.events';

export const USER_FEATURE_KEY = 'user';

export interface IUserState {
    me: IUser;
    token: string;
}

export interface IUserPartialStore {
    readonly [USER_FEATURE_KEY]: IUserState;
}

const initialState: IUserState = {
    me: {
        _id: CommonUtility.randomId(),
        username: 'guest',
        addresses: [],
        contactDetails: {
            email: '',
            phone: '',
        },
    },
    token: '',
};

export function userReducer(state: IUserState = initialState, action: UserActions): IUserState {
    function empty(obj) {
        for (const i in obj) return false;
        return true;
    }
    switch (action.type) {
        case EVENTS.USER_LOGIN_RECEIVED: {
            if (!empty(action.data)) {
                const me: IUser = action.data.returnedUser;
                const token: string = action.data.token;
                return Object.assign({}, state, { me, token });
            }
            return state;
        }
        case EVENTS.USER_RECEIVED: {
            if (!empty(action.data)) {
                const me: IUser = action.data;
                return Object.assign({}, state, { me });
            }
            return state;
        }
        default:
            return state;
    }
}
