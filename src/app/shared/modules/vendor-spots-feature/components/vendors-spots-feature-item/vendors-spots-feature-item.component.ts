import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IVendorSpot } from '../../../../../core/models/vendor-spots';

@Component({
    selector: 'app-vendors-spots-feature-item',
    templateUrl: './vendors-spots-feature-item.component.html',
    styleUrls: ['./vendors-spots-feature-item.component.scss'],
})
export class VendorsSpotsFeatureItemComponent {
    @Input() spot: IVendorSpot;
    @Input() headerImg: boolean;
    @Output() emitSpot = new EventEmitter<string>();

    constructor() {}

    dispatch(id: string): void {
        this.emitSpot.emit(id);
    }
}
