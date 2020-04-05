import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IUserState, USER_FEATURE_KEY } from './user.reducer';

const state = createFeatureSelector<IUserState>(USER_FEATURE_KEY);

export const getYourself = createSelector(state, ({ me }) => me);
export const getToken = createSelector(state, ({ token }) => token);
