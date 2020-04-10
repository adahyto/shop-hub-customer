import { IVendorOrderInfo } from './order';

export interface IProductBase {
    _id: string;
    price: number;
    name: string;
}

export interface IProduct extends IProductBase, IVendorOrderInfo {
    description: string;
    categories: string[];
    additionalDetails: string;
}
