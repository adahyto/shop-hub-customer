import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../../../../core/models/products';

@Component({
    selector: 'app-products-feature-item',
    templateUrl: './products-feature-item.component.html',
    styleUrls: ['./products-feature-item.component.scss'],
})
export class ProductsFeatureItemComponent {
    @Input() product: any; // IProduct | ICartProduct;
    @Input() headerImg: boolean;
    @Input() image: boolean;
    @Input() description: boolean;
    @Input() categories: boolean;

    @Output() emitProduct = new EventEmitter<IProduct>();

    constructor() {}

    dispatch(product: IProduct): void {
        this.emitProduct.emit(product);
    }

}
