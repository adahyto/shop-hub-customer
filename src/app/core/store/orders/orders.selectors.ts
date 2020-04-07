import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IOrdersState, ORDERS_FEATURE_KEY } from './orders.reducer';

const state = createFeatureSelector<IOrdersState>(ORDERS_FEATURE_KEY);

export const getLast = createSelector(state, ({ last }) => last);
export const getHistory = createSelector(state, ({ history }) => history);
