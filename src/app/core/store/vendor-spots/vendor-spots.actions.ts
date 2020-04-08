import { Action } from '@ngrx/store';
import { IVendorSpot, IVendorSpotBase } from '../../models/vendor-spots';
import * as EVENTS from './vendor-spots.events';

export class VendorSpotsRequestAction implements Action {
    readonly type = EVENTS.VENDOR_SPOTS_REQUESTED;
    constructor(public taskId: string) {}
}

export class VendorSpotsResponseAction implements Action {
    readonly type = EVENTS.VENDOR_SPOTS_RECEIVED;
    constructor(public taskId: string, public data: IVendorSpotBase[]) {}
}

export class VendorSpotsByIdRequestAction implements Action {
    readonly type = EVENTS.VENDOR_SPOTS_BY_ID_REQUESTED;
    constructor(public taskId: string, public vendorSpotId: string) {}
}

export class VendorSpotsByIdResponseAction implements Action {
    readonly type = EVENTS.VENDOR_SPOTS_BY_ID_RECEIVED;
    constructor(public taskId: string, public data: IVendorSpot) {}
}

export type VendorSpotsActions =
    | VendorSpotsRequestAction
    | VendorSpotsResponseAction
    | VendorSpotsByIdRequestAction
    | VendorSpotsByIdResponseAction;
