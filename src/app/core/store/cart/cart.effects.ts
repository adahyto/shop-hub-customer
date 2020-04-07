import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, take, switchMap } from 'rxjs/operators';
import { CartService } from '../../services/cart.service';
import * as actions from './cart.actions';
import * as EVENTS from './cart.events';

@Injectable({ providedIn: 'root' })
export class CartEffects {
    constructor(private cartService: CartService, private actions$: Actions) {}

    @Effect() addItem$ = this.actions$.pipe(
        ofType<actions.CartAddProductRequestAction>(EVENTS.CART_ADD_PRODUCT_REQUESTED),
        switchMap(({ taskId, payload }) =>
            of(this.cartService.baseToCartProduct(payload)).pipe(
                map((response) => new actions.CartAddProductResponseAction(taskId, response)),
            ),
        ),
    );

    @Effect() reduceItem$ = this.actions$.pipe(
        ofType<actions.CartReduceProductRequestAction>(EVENTS.CART_REDUCE_PRODUCT_REQUESTED),
        switchMap(({ taskId, productId }) =>
            of(productId).pipe(
                map((response) => {
                  console.log(response)
                  return new actions.CartReduceProductResponseAction(taskId, response)}),
            ),
        ),
    );

    @Effect() deleteItem$ = this.actions$.pipe(
        ofType<actions.CartDeleteProductRequestAction>(EVENTS.CART_DELETE_PRODUCT_REQUESTED),
        switchMap(({ taskId, productId }) =>
            of(productId).pipe(
                map((response) => {
                    console.log(response);
                    return new actions.CartDeleteProductResponseAction(taskId, response);
                }),
            ),
        ),
    );
}
