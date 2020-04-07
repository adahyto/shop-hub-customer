import { IOrder, IOrderResponse } from '../../models/order';
import { CommonUtility } from './../../utils/commonUtility';
import { OrdersActions } from './orders.actions';
import * as EVENTS from './orders.events';

export const ORDERS_FEATURE_KEY = 'orders';

export interface IOrdersState {
    last: IOrderResponse | {};
    history: IOrder[];
}

export interface IOrdersPartialStore {
    readonly [ORDERS_FEATURE_KEY]: IOrdersState;
}

const initialState: IOrdersState = {
    last: {},
    history: [],
};

export function ordersReducer(state: IOrdersState = initialState, action: OrdersActions): IOrdersState {
    switch (action.type) {
        case EVENTS.ORDERS_NEW_RECEIVED: {
            const last: IOrderResponse = action.orderResponse;
            return Object.assign({}, state, { last });
        }
        case EVENTS.ORDERS_HISTORY_RECEIVED: {
            const history: IOrder[] = action.orders;
            return Object.assign({}, state, history);
        }
        default:
            return state;
    }
}
