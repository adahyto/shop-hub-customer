import { Action } from '@ngrx/store';
import { IProduct } from '../../models/products';
import * as EVENTS from './products.events';

export class ProductsRequestAction implements Action {
    readonly type = EVENTS.PRODUCTS_REQUESTED;
    constructor(public taskId: string) {}
}

export class ProductsResponseAction implements Action {
    readonly type = EVENTS.PRODUCTS_RECEIVED;
    constructor(public taskId: string, public data: IProduct[]) {}
}

export class ProductsByIdRequestAction implements Action {
    readonly type = EVENTS.PRODUCTS_BY_ID_REQUESTED;
    constructor(public taskId: string, public productId: string) {}
}

export class ProductsByIdResponseAction implements Action {
    readonly type = EVENTS.PRODUCTS_BY_ID_RECEIVED;
    constructor(public taskId: string, public data: IProduct) {}
}

export class ProductsCategoryRequestAction implements Action {
    readonly type = EVENTS.PRODUCTS_CATEGORY_REQUESTED;
    constructor(public taskId: string, public category: string) {}
}

export class ProductsCategoryResponseAction implements Action {
    readonly type = EVENTS.PRODUCTS_CATEGORY_RECEIVED;
    constructor(public taskId: string, public data: IProduct[]) {}
}

export class ProductByNameRequestAction implements Action {
    readonly type = EVENTS.PRODUCTS_BY_NAME_REQUESTED;
    constructor(public taskId: string, public query: string) {}
}

export class ProductsByNameResponseAction implements Action {
    readonly type = EVENTS.PRODUCTS_BY_NAME_RECEIVED;
    constructor(public taskId: string, public data: IProduct[]) {}
}

export class ProductsCategoriesRequestAction implements Action {
    readonly type = EVENTS.PRODUCTS_CATEGORIES_REQUESTED;
    constructor(public taskId: string) {}
}

export class ProductsCategoriesResponseAction implements Action {
    readonly type = EVENTS.PRODUCTS_CATEGORIES_RECEIVED;
    constructor(public taskId: string, public data: any[]) {}
}

export type ProductsActions =
    | ProductsRequestAction
    | ProductsResponseAction
    | ProductsByIdRequestAction
    | ProductsByIdResponseAction
    | ProductsCategoryRequestAction
    | ProductsCategoryResponseAction
    | ProductByNameRequestAction
    | ProductsByNameResponseAction
    | ProductsCategoriesRequestAction
    | ProductsCategoriesResponseAction;
