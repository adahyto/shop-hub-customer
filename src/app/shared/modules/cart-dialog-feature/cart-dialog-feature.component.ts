import { Component, Injector, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonComponent } from '../../../core/components/commonComponent';
import { ICartProduct } from '../../../core/models/order';
import { CartFacade } from '../../../core/store/cart/cart.facade';
import { CartService } from './../../../core/services/cart.service';
import { VendorSpotsService } from './../../../core/services/vendor-spots.service';
import { UserFacade } from './../../../core/store/user/user.facade';

export interface DialogData {
    cartProducts: ICartProduct[];
}

@Component({
    selector: 'app-cart-dialog-feature',
    templateUrl: 'cart-dialog-feature-component.html',
    styleUrls: ['cart-dialog-feature-component.scss'],
})
export class CartDialogFeatureComponent extends CommonComponent {
    products: { spot: string; products: ICartProduct[] }[];
    username: string;
    constructor(
        public injector: Injector,
        public dialogRef: MatDialogRef<CartDialogFeatureComponent>,
        public cartFacade: CartFacade,
        public cartService: CartService,
        private vendorSpotsService: VendorSpotsService,
        public userFacade: UserFacade,
    ) {
        super(injector);
        this.subscriptions.add(
            this.cartFacade.mine$.subscribe((cart) => {
                this.products = this.cartService.sortByVendorSpot(cart.products);
            }),
        );
        this.subscriptions.add(this.userFacade.me$.subscribe((user) => (this.username = user.username)));
    }

    goTo(uri: string): void {
        this.navTo(`/${uri}`);
        this.exit();
    }

    addToCart(product: ICartProduct, amount?: number): void {
        this.cartFacade.addItem({ product: { ...product, amount: amount ? amount : 1 } });
    }

    total(payload: { spot: string; products: ICartProduct[] }[]): string {
        return this.cartService.calculateTotal([].concat(...payload.map((data) => data.products)));
    }

    reduceItemFromCart(id: string): void {
        this.cartFacade.reduceItem(id);
    }

    deleteItemFromCart(id: string): void {
        this.cartFacade.deleteItem(id);
    }

    idToName(id: string): string {
        return this.vendorSpotsService.idToName(id);
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    exit(): void {
        this.dialogRef.close();
    }
}
