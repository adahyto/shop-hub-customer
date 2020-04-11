import { products } from './../endpoints/endpoints';
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

    sortByVendorSpot(prods: ICartProduct[]): { spot: string; products: ICartProduct[] }[] {
        let res = [];
        for (const product of prods) {
            if (res.length > 0) {
                let found = false;
                res.forEach((element) => {
                    if (element.spot === product.vendorSpotId) {
                        found = true;
                        const existing = res.filter((obj) => obj.spot === product.vendorSpotId);
                        const others = res.filter((obj) => obj.spot !== product.vendorSpotId);
                        const payload = [...others, { ...existing[0], products: [...existing[0].products, product] }];
                        res = payload;
                    }
                });
                if (!found) {
                    const payload = { spot: product.vendorSpotId, products: [product] };
                    res.push(payload);
                }
            } else {
                const payload = { spot: product.vendorSpotId, products: [product] };
                res.push(payload);
            }
        }
        return res;
    }
}
