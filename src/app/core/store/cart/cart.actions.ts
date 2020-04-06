import { Action } from '@ngrx/store';
import { ICartProduct } from '../../models/order';
import { IProductBase } from './../../models/products';
import * as EVENTS from './cart.events';

export class CartAddProductRequestAction implements Action {
    readonly type = EVENTS.CART_ADD_PRODUCT_REQUESTED;
    constructor(public taskId: string, public productBase: IProductBase) {}
}

export class CartAddProductResponseAction implements Action {
    readonly type = EVENTS.CART_ADD_PRODUCT_RECEIVED;
    constructor(public taskId: string, public cartProduct: ICartProduct) {}
}

export class CartReduceProductRequestAction implements Action {
    readonly type = EVENTS.CART_REDUCE_PRODUCT_REQUESTED;
    constructor(public taskId: string, public productId: string) {}
}

export class CartReduceProductResponseAction implements Action {
    readonly type = EVENTS.CART_REDUCE_PRODUCT_RECEIVED;
    constructor(public taskId: string, public productId: string) {}
}

export class CartDeleteProductRequestAction implements Action {
    readonly type = EVENTS.CART_DELETE_PRODUCT_REQUESTED;
    constructor(public taskId: string, public productId: string) {}
}

export class CartDeleteProductResponseAction implements Action {
    readonly type = EVENTS.CART_DELETE_PRODUCT_RECEIVED;
    constructor(public taskId: string, public productId: string) {}
}

export type CartActions =
    | CartAddProductRequestAction
    | CartAddProductResponseAction
    | CartReduceProductRequestAction
    | CartReduceProductResponseAction
    | CartDeleteProductRequestAction
    | CartDeleteProductResponseAction;
