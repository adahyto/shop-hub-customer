import { Component } from '@angular/core';
import { CartFacade } from './core/store/cart/cart.facade';
import { ProductsFacade } from './core/store/products/products.facade';
import { UserFacade } from './core/store/user/user.facade';
import { VendorSpotsFacade } from './core/store/vendor-spots/vendor-spots.facade';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'shop-hub-customer';

    constructor(
        private userFacede: UserFacade,
        private productsFacade: ProductsFacade,
        private vendorSpotsFacade: VendorSpotsFacade,
        private cartFacade: CartFacade,
    ) {}

    login() {
        this.userFacede.login({ user: { username: 'testUser', password: '123' } });
    }

    getProducts() {
        this.productsFacade.fetchAllProducts();
    }

    getProductsById() {
        this.productsFacade.fetchProductsById('5e88aaa97c63d638909bf0fd');
    }

    getProductsByCategory() {
        this.productsFacade.fetchProductsByCategory('chujoza');
    }

    getProductsByName() {
        this.productsFacade.searchProductsByName('to');
    }

    getVendorSpots() {
        this.vendorSpotsFacade.fetchAllVendorSpots();
    }

    getVendorSpotsById() {
        this.vendorSpotsFacade.fetchVendorSpotsById('5e885c986681e9668fb469f7');
    }

    logSpots() {
        this.vendorSpotsFacade.all$.subscribe((spots) => console.log(spots));
    }

    addItemToTheCart() {
        this.cartFacade.addItem({
            productBase: {
                _id: '5e88aaa97c63d638909bf0fd',
                price: 0.01,
                name: 'to',
            },
            vendorOrderInfo: {
                vendorId: '5e88593ef758f163a7a224d8',
                vendorSpotId: '5e885c986681e9668fb469f7',
            },
            amount: 1,
        });
    }

    reduceItemFromCart() {
        this.cartFacade.reduceItem('5e88aaa97c63d638909bf0fd');
    }

    deleteItemFromCart() {
        this.cartFacade.deleteItem('5e88aaa97c63d638909bf0fd');
    }
}
