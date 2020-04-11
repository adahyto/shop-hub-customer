import { IAddress } from './location';
import { IProduct,  } from './products';

enum DeliveryType {
    vendorSpot = 'vendorSpot',
    onAddress = 'onAddress',
}

enum PaymentType {
    online = 'online',
    onSpot = 'onSpot',
    onDeliver = 'onDeliver',
}

enum PaymentStatus {
    paid = 'paid',
    waiting = 'waiting',
}

enum OrderStatus {
    ordered = 'ordered',
    processing = 'processing',
    onVendorSpot = 'onVendorSpot',
    onTheWay = 'onTheWay',
    delivered = 'delivered',
}

export interface IDeliveryDetails {
    type: string | DeliveryType;
    address: IAddress;
    date: string;
}

export interface IPaymentDetails {
    type: string | PaymentType;
    status: string | PaymentStatus;
}

export interface IVendorOrderInfo {
    vendorId: string;
    vendorSpotId: string;
}

export interface ICartProduct extends IProduct {
    amount: number;
}

export interface IAddToCartPayload {
    product: ICartProduct;
}

export interface ICart {
    products: ICartProduct[] | [];
}

export interface IOrder {
    date: string;
    vendorId: string;
    customerId: string;
    totalPrice: string;
    cartProducts: ICartProduct[];
    deliveryDetails: IDeliveryDetails;
    paymentDetails: IPaymentDetails;
    status: string | OrderStatus;
    note: string;
}

export interface IOrderResponse {
    success: boolean;
    order: IOrder;
}
