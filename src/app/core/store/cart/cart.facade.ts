import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAddToCartPayload } from '../../models/order';
import * as actions from './cart.actions';
import { ICartPartialStore } from './cart.reducer';
import * as selectors from './cart.selectors';

@Injectable()
export class CartFacade {
    mine$ = this.store.pipe(select(selectors.getMineCart));

    constructor(private store: Store<ICartPartialStore>) {}

    addItem = (payload: IAddToCartPayload): void => {
        const taskId = 'add-item';
        this.store.dispatch(new actions.CartAddProductRequestAction(taskId, payload));
    };

    reduceItem = (productId: string): void => {
        const taskId = 'reduce-item';
        this.store.dispatch(new actions.CartReduceProductRequestAction(taskId, productId));
    };

    deleteItem = (productId: string): void => {
        const taskId = 'delete-item';
        this.store.dispatch(new actions.CartDeleteProductRequestAction(taskId, productId));
    };
}
