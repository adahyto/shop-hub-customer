import { Component, Injector } from '@angular/core';
import { UserFacade } from 'src/app/core/store/user/user.facade';
import { CommonComponent } from './../../core/components/commonComponent';
import { ICartProduct } from './../../core/models/order';
import { CartFacade } from './../../core/store/cart/cart.facade';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends CommonComponent {
    productLength: number;
    vendorSpotsLength: number;
    username: string;

    constructor(private injector: Injector, private cartFacade: CartFacade, private userFacade: UserFacade) {
        super(injector);
        this.subscriptions.add(
            this.cartFacade.mine$.subscribe((cart) => {
                this.productLength = this.length(cart.products);
                this.vendorSpotsLength = this.vendorSpotsCount(cart.products);
            }),
        );
        this.subscriptions.add(this.userFacade.me$.subscribe((user) => (this.username = user.username)));
    }



    goTo(url: string): void {
        this.navTo(`/${url}`);
    }

    length(arr): number {
        return arr.length;
    }

    vendorSpotsCount(arr: ICartProduct[]): number {
        return Object.keys(
            arr.reduce((obj, v) => {
                obj[v.vendorSpotId] = (obj[v.vendorSpotId] || 0) + 1;
                return obj;
            }, {}),
        ).length;
    }
}
