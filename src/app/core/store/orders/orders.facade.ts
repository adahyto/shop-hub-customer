import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IOrder } from '../../models/order';
import * as actions from './orders.actions';
import { IOrdersPartialStore } from './orders.reducer';
import * as selectors from './orders.selectors';

@Injectable()
export class OrdersFacade {
    last$ = this.store.pipe(select(selectors.getLast));
    history$ = this.store.pipe(select(selectors.getHistory));

    constructor(private store: Store<IOrdersPartialStore>) {}

    newOrder = (order: IOrder): void => {
        const taskId = 'new-order';
        this.store.dispatch(new actions.OrdersNewRequestAction(taskId, order));
    };

    getHistory = (): void => {
        const taskId = 'get-history';
        this.store.dispatch(new actions.OrderHistoryRequestAction(taskId));
    };
}
