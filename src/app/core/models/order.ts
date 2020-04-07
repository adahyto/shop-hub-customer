import { IAddress } from './location';
import { IProductBase } from './products';

enum DeliveryType {
    'vendorSpot',
    'onAddress',
}

enum PaymentType {
    'online',
    'onSpot',
    'onDeliver',
}

enum PaymentStatus {
    'paid',
    'waiting',
}

enum OrderStatus {
    'ordered',
    'processing',
    'onVendorSpot',
    'onTheWay',
    'delivered',
}

export interface IDeliveryDetails {
    type: DeliveryType;
    address: IAddress;
    date: string;
}

export interface IPaymentDetails {
    type: PaymentType;
    status: PaymentStatus;
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
    vendorOrderInfo: IVendorOrderInfo;
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
    status: OrderStatus;
    note: string;
}

export interface IOrderResponse {
  success: boolean;
  order: IOrder;
}
