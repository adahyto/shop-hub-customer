import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-cart-info',
    templateUrl: './cart-info.component.html',
    styleUrls: ['./cart-info.component.scss'],
})
export class CartInfoComponent {
    @Input() itemsCount: number;
    @Input() vendorSpotsCount: number;

    constructor() {}
}
