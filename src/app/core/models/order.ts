import { IAddress } from './location';
import { IProductBase } from './products';

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

export interface ICartProduct extends IProductBase, IVendorOrderInfo {
    amount: number;
}

export interface IAddToCartPayload {
    productBase: IProductBase;
    amount: number;
}

export interface ICart {
    products: ICartProduct[] | [];
}

export interface IOrder {
    date: string;
    vendorId: string;
    customerId: string;
    totalPrice: number;
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
