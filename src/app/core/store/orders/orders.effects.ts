import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { OrdersService } from './../../services/orders.service';
import * as actions from './orders.actions';
import * as EVENTS from './orders.events';

@Injectable({ providedIn: 'root' })
export class OrdersEffects {
    constructor(private ordersService: OrdersService, private actions$: Actions) {}

    @Effect() newOrder$ = this.actions$.pipe(
        ofType<actions.OrdersNewRequestAction>(EVENTS.ORDERS_NEW_REQUESTED),
        switchMap(({ taskId, order }) =>
            this.ordersService.new(order).pipe(map((response) => new actions.OrdersNewResponseAction(taskId, response))),
        ),
    );

    @Effect() getHistory$ = this.actions$.pipe(
        ofType<actions.OrderHistoryRequestAction>(EVENTS.ORDERS_HISTORY_REQUESTED),
        switchMap(({ taskId }) =>
            this.ordersService.history().pipe(map((response) => new actions.OrderHistoryResponseAction(taskId, response))),
        ),
    );
}
