import { Component, Injector, Input, OnInit } from '@angular/core';
import { CommonComponent } from './../../../core/components/commonComponent';
import { ICartProduct } from './../../../core/models/order';
import { IProduct } from './../../../core/models/products';
import { CartFacade } from './../../../core/store/cart/cart.facade';
import { ProductsFacade } from './../../../core/store/products/products.facade';

@Component({
    selector: 'app-products-feature',
    templateUrl: './products-feature.component.html',
    styleUrls: ['./products-feature.component.scss'],
})
export class ProductsFeatureComponent extends CommonComponent implements OnInit {
    @Input() flexDisplay;
    products: IProduct[];

    constructor(private injector: Injector, private productFacade: ProductsFacade, private cartFacade: CartFacade) {
        super(injector);
        this.subscriptions.add(this.productFacade.all$.subscribe((products) => (this.products = products)));
    }

    ngOnInit() {
        this.productFacade.fetchAllProducts();
    }

    addToCart(product: ICartProduct, amount: number): void {
        this.cartFacade.addItem({ product: { ...product, amount: amount ? amount : 1 } });
    }
}
