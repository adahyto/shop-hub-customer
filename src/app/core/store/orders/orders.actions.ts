import { Action } from '@ngrx/store';
import { IOrder, IOrderResponse } from './../../models/order';
import * as EVENTS from './orders.events';

export class OrdersNewRequestAction implements Action {
    readonly type = EVENTS.ORDERS_NEW_REQUESTED;
    constructor(public taskId: string, public order: IOrder) {}
}

export class OrdersNewResponseAction implements Action {
    readonly type = EVENTS.ORDERS_NEW_RECEIVED;
    constructor(public taskId: string, public orderResponse: IOrderResponse) {}
}

export class OrderHistoryRequestAction implements Action {
    readonly type = EVENTS.ORDERS_HISTORY_REQUESTED;
    constructor(public taskId: string) {}
}

export class OrderHistoryResponseAction implements Action {
    readonly type = EVENTS.ORDERS_HISTORY_RECEIVED;
    constructor(public taskId: string, public orders: IOrder[]) {}
}

export type OrdersActions = OrdersNewRequestAction | OrdersNewResponseAction | OrderHistoryRequestAction | OrderHistoryResponseAction;
