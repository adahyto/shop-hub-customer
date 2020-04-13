import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { vendorSpot, vendorSpots } from './../endpoints/endpoints';
import { IVendorSpot, IVendorSpotBase } from './../models/vendor-spots';
import { VendorSpotsFacade } from './../store/vendor-spots/vendor-spots.facade';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root',
})
export class VendorSpotsService {
    constructor(private api: ApiService, private vendorSpotsFacade: VendorSpotsFacade) {}

    getAll(): Observable<IVendorSpotBase[]> {
        return this.api.get(vendorSpots(environment.apiUrl));
    }

    getById(id: string): Observable<IVendorSpot> {
        return this.api.get(vendorSpot(environment.apiUrl, id));
    }

    idToName(id: string, local: boolean = true): string {
        let allSpots: IVendorSpotBase[];
        if (local) {
            this.vendorSpotsFacade.all$.subscribe((spots) => (allSpots = spots));
            return allSpots.filter((spot) => (spot._id === id))[0]?.name;
        }
    }
}
