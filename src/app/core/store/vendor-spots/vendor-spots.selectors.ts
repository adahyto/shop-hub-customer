import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IVendorSpotsState, VENDOR_SPOTS_FEATURE_KEY } from './vendor-spots.reducer';

const state = createFeatureSelector<IVendorSpotsState>(VENDOR_SPOTS_FEATURE_KEY);

export const getAllVendorSpots = createSelector(state, ({ all }) => all);
export const getVendorSpotById = createSelector(state, ({ byId }) => byId);
