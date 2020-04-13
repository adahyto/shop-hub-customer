import { Component, Injector, OnInit } from '@angular/core';
import { CommonComponent } from './../../../../core/components/commonComponent';
import { ICart } from './../../../../core/models/order';
import { CartFacade } from './../../../../core/store/cart/cart.facade';

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.scss'],
})
export class OrderComponent extends CommonComponent implements OnInit {
    cart: ICart;

    constructor(private injector: Injector, private cartFacade: CartFacade) {
        super(injector);
        this.subscriptions.add(this.cartFacade.mine$.subscribe((cart) => (this.cart = cart)));
    }

    ngOnInit(): void {}
}
