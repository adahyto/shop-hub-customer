import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as actions from './products.actions';
import { IProductsPartialStore } from './products.reducer';
import * as selectors from './products.selectors';

@Injectable()
export class ProductsFacade {
    all$ = this.store.pipe(select(selectors.getAllProducts));
    selectedById = this.store.pipe(select(selectors.getProductById));
    byCategory$ = this.store.pipe(select(selectors.getProductsByCategory));
    byName$ = this.store.pipe(select(selectors.getProductsByName));
    categories$ = this.store.pipe(select(selectors.getCategories));

    constructor(private store: Store<IProductsPartialStore>) {}

    fetchAllProducts = (query?: { perPage?: number; page?: number }): void => {
        const taskId = 'fetch-all-products';
        this.store.dispatch(new actions.ProductsRequestAction(taskId));
    };

    fetchProductsById = (id: string): void => {
        const taskId = 'fetch-products-by-id';
        this.store.dispatch(new actions.ProductsByIdRequestAction(taskId, id));
    };

    fetchProductsByCategory = (category: string): void => {
        const taskId = 'fetch-products-by-category';
        this.store.dispatch(new actions.ProductsCategoryRequestAction(taskId, category));
    };

    searchProductsByName = (query: string): void => {
        const taskId = 'search-products-by-name';
        this.store.dispatch(new actions.ProductByNameRequestAction(taskId, query));
    };

    getCategories = (): void => {
        const taskId = 'get-categories';
        this.store.dispatch(new actions.ProductsCategoriesRequestAction(taskId));
    };
}
