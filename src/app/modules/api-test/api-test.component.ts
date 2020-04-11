import { CommonComponent } from './../../core/components/commonComponent';
import { Component, Injector } from '@angular/core';
import { CartFacade } from '../../core/store/cart/cart.facade';
import { OrdersFacade } from '../../core/store/orders/orders.facade';
import { ProductsFacade } from '../../core/store/products/products.facade';
import { UserFacade } from '../../core/store/user/user.facade';
import { VendorSpotsFacade } from '../../core/store/vendor-spots/vendor-spots.facade';

@Component({
    selector: 'app-api-test',
    templateUrl: './api-test.component.html',
    styleUrls: ['./api-test.component.scss'],
})
export class ApiTestComponent extends CommonComponent {
    constructor(
        private injector: Injector,
        private userFacede: UserFacade,
        private productsFacade: ProductsFacade,
        private vendorSpotsFacade: VendorSpotsFacade,
        private cartFacade: CartFacade,
        private ordersFacade: OrdersFacade,
    ) {
        super(injector);
    }

    nav(): void {
        this.navTo('/');
    }

    login(): void {
        this.userFacede.login({ user: { username: 'testUser', password: '123' } });
    }

    getProducts(): void {
        this.productsFacade.fetchAllProducts();
    }

    getProductsById(): void {
        this.productsFacade.fetchProductsById('5e88aaa97c63d638909bf0fd');
    }

    getProductsByCategory(): void {
        this.productsFacade.fetchProductsByCategory('chujoza');
    }

    getProductsByName(): void {
        this.productsFacade.searchProductsByName('to');
    }

    getVendorSpots(): void {
        this.vendorSpotsFacade.fetchAllVendorSpots();
    }

    getVendorSpotsById(): void {
        this.vendorSpotsFacade.fetchVendorSpotsById('5e885c986681e9668fb469f7');
    }

    addItemToTheCart(): void {
        this.cartFacade.addItem({
            product: {
                _id: '5e88aaa97c63d638909bf0fd',
                name: 'firstProduct',
                price: 0.01,
                amount: 666,
                vendorId: 'asd',
                vendorSpotId: 'asd',
                description: '',
                categories: [],
                additionalDetails: ''
            },
        });
    }

    reduceItemFromCart(): void {
        this.cartFacade.reduceItem('5e88aaa97c63d638909bf0fd');
    }

    deleteItemFromCart(): void {
        this.cartFacade.deleteItem('5e88aaa97c63d638909bf0fd');
    }

    newOrder() {
        this.ordersFacade.newOrder({
            vendorId: '5e88593ef758f163a7a224d8',
            customerId: '5e88593ef758f163a7a224d8',
            totalPrice: "6.66",
            cartProducts: [
                {
                    _id: '5e88aaa97c63d638909bf0fd',
                    name: 'firstProduct',
                    price: 0.01,
                    amount: 666,
                    vendorId: 'asd',
                    vendorSpotId: 'asd',
                    description: '',
                    categories: [],
                    additionalDetails: '',
                },
            ],
            deliveryDetails: {
                type: 'vendorSpot',
                date: '10.04 21:37 ',
                address: { name: 'nora', street: 'asd 2323', city: 'asd', locale: { lat: '12', long: '12' } },
            },
            paymentDetails: {
                type: 'onSpot',
                status: 'waiting',
            },
            note: 'jebać PiS bardziej',
            status: 'ordered',
            date: '09.04.2020 12:30',
        });
    }

    getOrderHistory() {
        this.ordersFacade.getHistory();
    }
}
