import { ActionReducerMap } from '@ngrx/store';
import { IProductsState, productsReducer } from './products/products.reducer';
import { IUserState, userReducer } from './user/user.reducer';

export interface AppState {
    user: IUserState;
    products: IProductsState;
}

export const reducers: ActionReducerMap<AppState> = {
    user: userReducer,
    products: productsReducer,
};
