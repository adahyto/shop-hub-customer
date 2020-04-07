import { Injectable } from '@angular/core';
import { IAddToCartPayload, ICartProduct } from '../models/order';

@Injectable({
    providedIn: 'root',
})
export class CartService {
    constructor() {}

    baseToCartProduct(payload: IAddToCartPayload): ICartProduct {
        return {
          vendorId: payload.vendorOrderInfo.vendorId,
          vendorSpotId: payload.vendorOrderInfo.vendorSpotId,
          amount: payload.amount,
          ...payload.productBase,
        };
    }
}
