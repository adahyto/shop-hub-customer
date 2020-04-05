import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IUserState, USER_FEATURE_KEY } from './user.reducer';

const state = createFeatureSelector<IUserState>(USER_FEATURE_KEY);

export const reclaimYourself = createSelector(state, ({ me }) => me);
export const reclaimToken = createSelector(state, ({ token }) => token);
