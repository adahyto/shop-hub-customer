import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IProductsState, PRODUCTS_FEATURE_KEY } from './products.reducer';

const state = createFeatureSelector<IProductsState>(PRODUCTS_FEATURE_KEY);

export const getAllProducts = createSelector(state, ({ all }) => all);
export const getProductById = createSelector(state, ({ byId }) => byId);
export const getProductsByCategory = createSelector(state, ({ byCategory }) => byCategory);
export const getProductsByName = createSelector(state, ({ byName }) => byName);
export const getCategories = createSelector(state, ({ categories }) => categories);
