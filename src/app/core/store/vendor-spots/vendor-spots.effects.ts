import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { VendorSpotsService } from './../../services/vendor-spots.service';
import * as actions from './vendor-spots.actions';
import * as EVENTS from './vendor-spots.events';

@Injectable({ providedIn: 'root' })
export class VendorSpotsEffects {
    constructor(private vendorSpotsService: VendorSpotsService, private actions$: Actions) {}

    @Effect() fetchAllVendorSpots$ = this.actions$.pipe(
        ofType<actions.VendorSpotsRequestAction>(EVENTS.VENDOR_SPOTS_REQUESTED),
        switchMap(({ taskId }) =>
            this.vendorSpotsService.getAll().pipe(map((response) => new actions.VendorSpotsResponseAction(taskId, response))),
        ),
    );

    @Effect() searchVendorSpotsById$ = this.actions$.pipe(
        ofType<actions.VendorSpotsByIdRequestAction>(EVENTS.VENDOR_SPOTS_BY_ID_REQUESTED),
        switchMap(({ taskId, vendorSpotId }) =>
            this.vendorSpotsService
                .getById(vendorSpotId)
                .pipe(map((response) => new actions.VendorSpotsByIdResponseAction(taskId, response))),
        ),
    );
}
