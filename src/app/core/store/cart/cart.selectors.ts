import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CART_FEATURE_KEY, ICartState } from './cart.reducer';

const state = createFeatureSelector<ICartState>(CART_FEATURE_KEY);

export const getMineCart = createSelector(state, ({ mineCart }) => mineCart);
