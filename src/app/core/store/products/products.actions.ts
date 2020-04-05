import { Action } from '@ngrx/store';
import { IProduct } from '../../models/products';
import * as EVENTS from './products.events';

export class ProductRequestAction implements Action {
    readonly type = EVENTS.PRODUCTS_REQUESTED;
    constructor(public taskId: string) {}
}

export class ProductResponseAction implements Action {
    readonly type = EVENTS.PRODUCTS_RECEIVED;
    constructor(public taskId: string, public data: IProduct[]) {}
}

export class ProductCategoryRequestAction implements Action {
    readonly type = EVENTS.PRODUCTS_CATEGORY_REQUESTED;
    constructor(public taskId: string, public category: string) {}
}

export class ProductCategoryResponseAction implements Action {
    readonly type = EVENTS.PRODUCTS_CATEGORY_RECEIVED;
    constructor(public taskId: string, public data: IProduct[]) {}
}

export class ProductByNameRequestAction implements Action {
    readonly type = EVENTS.PRODUCTS_BY_NAME_REQUESTED;
    constructor(public taskId: string, public query: string) {}
}

export class ProductByNameResponseAction implements Action {
    readonly type = EVENTS.PRODUCTS_BY_NAME_RECEIVED;
    constructor(public taskId: string, public data: IProduct[]) {}
}

export type ProductsActions =
    | ProductRequestAction
    | ProductResponseAction
    | ProductCategoryRequestAction
    | ProductCategoryResponseAction
    | ProductByNameRequestAction
    | ProductByNameResponseAction;
