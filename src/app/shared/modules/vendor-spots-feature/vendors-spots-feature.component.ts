import { Component, Injector, Input, OnInit } from '@angular/core';
import { CommonComponent } from '../../../core/components/commonComponent';
import { IVendorSpotBase } from './../../../core/models/vendor-spots';
import { VendorSpotsFacade } from './../../../core/store/vendor-spots/vendor-spots.facade';

@Component({
    selector: 'app-vendors-spots-feature',
    templateUrl: './vendors-spots-feature.component.html',
    styleUrls: ['./vendors-spots-feature.component.scss'],
})
export class VendorsSpotsFeatureComponent extends CommonComponent implements OnInit {
    @Input() flexDisplay: string;
    vendorSpots: IVendorSpotBase[];

    constructor(private injector: Injector, private vendorSpotsFacade: VendorSpotsFacade) {
        super(injector);
        this.subscriptions.add(this.vendorSpotsFacade.all$.subscribe((spots) => (this.vendorSpots = spots)));
    }

    ngOnInit() {
        this.vendorSpotsFacade.fetchAllVendorSpots();
    }

    goToSpot(id: string): void {
        this.navTo(`${id}`);
    }
}
