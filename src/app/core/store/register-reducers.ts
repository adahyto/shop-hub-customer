import { ActionReducerMap } from '@ngrx/store';
import { IProductsState, productsReducer } from './products/products.reducer';
import { IUserState, userReducer } from './user/user.reducer';
import { IVendorSpotsState, vendorSpotsReducer } from './vendor-spots/vendor-spots.reducer';

export interface AppState {
    user: IUserState;
    products: IProductsState;
    vendorSpots: IVendorSpotsState;
}

export const reducers: ActionReducerMap<AppState> = {
    user: userReducer,
    products: productsReducer,
    vendorSpots: vendorSpotsReducer,
};
