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
}
