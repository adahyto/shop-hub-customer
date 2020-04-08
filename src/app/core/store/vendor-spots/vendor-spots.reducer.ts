import { IVendorSpot, IVendorSpotBase } from './../../models/vendor-spots';
import { VendorSpotsActions } from './vendor-spots.actions';
import * as EVENTS from './vendor-spots.events';

export const VENDOR_SPOTS_FEATURE_KEY = 'vendorSpots';

export interface IVendorSpotsState {
    all: IVendorSpotBase[];
    byId: IVendorSpot | {};
}

export interface IVendorSpotsPartialStore {
    readonly [VENDOR_SPOTS_FEATURE_KEY]: IVendorSpotsState;
}

const initialState: IVendorSpotsState = {
    all: [],
    byId: {},
};

export function vendorSpotsReducer(state: IVendorSpotsState = initialState, action: VendorSpotsActions): IVendorSpotsState {
    switch (action.type) {
        case EVENTS.VENDOR_SPOTS_RECEIVED: {
            const all = action.data;
            return Object.assign({}, state, { all });
        }
        case EVENTS.VENDOR_SPOTS_BY_ID_RECEIVED: {
            const byId = action.data;
            return Object.assign({}, state, { byId });
        }
        default:
            return state;
    }
}
