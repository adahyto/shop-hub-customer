import { Injectable } from '@angular/core';
import { IAddToCartPayload, ICartProduct } from '../models/order';

@Injectable({
    providedIn: 'root',
})
export class CartService {
    constructor() {}

    baseToCartProduct(payload: IAddToCartPayload): ICartProduct {
        return payload.product;
    }

    calculateTotal(products: ICartProduct[]): number {
        let total = 0;
        products.forEach((item) => {
            total += item.price * item.amount;
        });
        return total;
    }

    sortByVendorSpot(products: ICartProduct[]): { spot: string; products: ICartProduct[] }[] {
        return [
            { spot: 'asd', products },
            { spot: 'asd', products },
        ];
    }
}
