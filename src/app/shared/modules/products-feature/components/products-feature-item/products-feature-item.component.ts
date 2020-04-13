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
    @Input() allBtns: boolean;
    @Input() categories: boolean;
    @Input() amount: boolean;
    @Input() total: boolean;
    @Input() thin: boolean;
    @Output() emitProduct = new EventEmitter<IProduct>();
    @Output() emitReduce = new EventEmitter<string>();
    @Output() emitDelete = new EventEmitter<string>();

    constructor() {}

    dispatch(product: IProduct): void {
        this.emitProduct.emit(product);
    }
    reduce(id: string): void {
        this.emitReduce.emit(id);
    }
    delete(id: string): void {
        this.emitDelete.emit(id);
    }
}
