import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { ProductsService } from './../../services/products.service';
import * as actions from './products.actions';
import * as EVENTS from './products.events';

@Injectable({ providedIn: 'root' })
export class ProductsEffects {
    constructor(private productService: ProductsService, private actions$: Actions) {}

    @Effect() fetchAllProducts$ = this.actions$.pipe(
        ofType<actions.ProductsRequestAction>(EVENTS.PRODUCTS_REQUESTED),
        switchMap(({ taskId }) =>
            this.productService.getAll().pipe(map((response) => new actions.ProductsResponseAction(taskId, response))),
        ),
    );

    @Effect() searchProductsById$ = this.actions$.pipe(
        ofType<actions.ProductsByIdRequestAction>(EVENTS.PRODUCTS_BY_ID_REQUESTED),
        switchMap(({ taskId, productId }) =>
            this.productService.getById(productId).pipe(map((response) => new actions.ProductsByIdResponseAction(taskId, response))),
        ),
    );

    @Effect() fetchProductsByCategory$ = this.actions$.pipe(
        ofType<actions.ProductsCategoryRequestAction>(EVENTS.PRODUCTS_CATEGORY_REQUESTED),
        switchMap(({ taskId, category }) =>
            this.productService
                .getByCategory(category)
                .pipe(map((response) => new actions.ProductsCategoryResponseAction(taskId, response))),
        ),
    );

    @Effect() searchProductsByName$ = this.actions$.pipe(
        ofType<actions.ProductByNameRequestAction>(EVENTS.PRODUCTS_BY_NAME_REQUESTED),
        switchMap(({ taskId, query }) =>
            this.productService.searchByName(query).pipe(map((response) => new actions.ProductsByNameResponseAction(taskId, response))),
        ),
    );

    @Effect() getCategories$ = this.actions$.pipe(
        ofType<actions.ProductsCategoriesRequestAction>(EVENTS.PRODUCTS_CATEGORIES_REQUESTED),
        switchMap(({ taskId }) =>
            this.productService.getCategories().pipe(map((response) => new actions.ProductsCategoriesResponseAction(taskId, response))),
        ),
    );
}
