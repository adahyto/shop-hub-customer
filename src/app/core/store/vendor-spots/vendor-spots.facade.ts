import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as actions from './vendor-spots.actions';
import { IVendorSpotsPartialStore } from './vendor-spots.reducer';
import * as selectors from './vendor-spots.selectors';

@Injectable()
export class VendorSpotsFacade {
    all$ = this.store.pipe(select(selectors.getAllVendorSpots));
    selectedById = this.store.pipe(select(selectors.getVendorSpotById));

    constructor(private store: Store<IVendorSpotsPartialStore>) {}

    fetchAllVendorSpots = (): void => {
        const taskId = 'fetch-all-vendor-spots';
        this.store.dispatch(new actions.VendorSpotsRequestAction(taskId));
    };

    fetchVendorSpotsById = (id: string): void => {
        const taskId = 'fetch-vendor-spots-by-id';
        this.store.dispatch(new actions.VendorSpotsByIdRequestAction(taskId, id));
    };
}
