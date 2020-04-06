import { IProduct } from '../../models/products';
import { ProductsActions } from './products.actions';
import * as EVENTS from './products.events';

export const PRODUCTS_FEATURE_KEY = 'products';

export interface IProductsState {
    all: IProduct[];
    byId: IProduct | {};
    byCategory: IProduct[];
    byName: IProduct[];
}

export interface IProductsPartialStore {
    readonly [PRODUCTS_FEATURE_KEY]: IProductsState;
}

const initialState: IProductsState = {
    all: [],
    byId: {},
    byCategory: [],
    byName: [],
};

export function productsReducer(state: IProductsState = initialState, action: ProductsActions): IProductsState {
    switch (action.type) {
        case EVENTS.PRODUCTS_RECEIVED: {
            const all = action.data;
            return Object.assign({}, state, { all });
        }
        case EVENTS.PRODUCTS_BY_ID_RECEIVED: {
            const byId = action.data;
            return Object.assign({}, state, { byId });
        }
        case EVENTS.PRODUCTS_CATEGORY_RECEIVED: {
            const byCategory = action.data;
            return Object.assign({}, state, { byCategory });
        }
        case EVENTS.PRODUCTS_BY_NAME_RECEIVED: {
            const byName = action.data;
            return Object.assign({}, state, { byName });
        }
        default:
            return state;
    }
}
