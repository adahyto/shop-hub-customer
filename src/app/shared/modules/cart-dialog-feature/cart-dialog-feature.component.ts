import { CartService } from './../../../core/services/cart.service';
import { Component, Injector } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonComponent } from '../../../core/components/commonComponent';
import { ICartProduct } from '../../../core/models/order';
import { CartFacade } from '../../../core/store/cart/cart.facade';

export interface DialogData {
    cartProducts: ICartProduct[];
}

@Component({
    selector: 'app-cart-dialog-feature',
    templateUrl: 'cart-dialog-feature-component.html',
    styleUrls: ['cart-dialog-feature-component.scss'],
})
export class CartDialogFeatureComponent extends CommonComponent {
    products: ICartProduct[];
    constructor(
        public injector: Injector,
        public dialogRef: MatDialogRef<CartDialogFeatureComponent>,
        public cartFacade: CartFacade,
        public cartService: CartService,
    ) {
        super(injector);
        this.subscriptions.add(
            this.cartFacade.mine$.subscribe((cart) => {
                this.products = cart.products;
            }),
        );
    }

    addToCart(product: ICartProduct, amount: number): void {
        this.cartFacade.addItem({ product: { ...product, amount: amount ? amount : 1 } });
    }

    total(products: ICartProduct[]): number {
        return this.cartService.calculateTotal(products);
    }

    reduceItemFromCart(id: string): void {
        this.cartFacade.reduceItem(id);
    }

    deleteItemFromCart(id: string): void {
        this.cartFacade.deleteItem(id);
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    exit(): void {
        this.dialogRef.close();
    }
}
