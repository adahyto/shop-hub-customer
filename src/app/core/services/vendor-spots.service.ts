import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { vendorSpot, vendorSpots } from './../endpoints/endpoints';
import { IVendorSpot, IVendorSpotBase } from './../models/vendor-spots';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root',
})
export class VendorSpotsService {
    constructor(private api: ApiService) {}

    getAll(): Observable<IVendorSpotBase[]> {
        return this.api.get(vendorSpots(environment.apiUrl));
    }

    getById(id: string): Observable<IVendorSpot> {
        return this.api.get(vendorSpot(environment.apiUrl, id));
    }
}
