import { IAddress } from './location';
import { IProduct } from './products';

export interface IVendorSpotBase {
    _id: string;
    vendorId: string;
    name: string;
    description: string;
    address: IAddress;
}

export interface IVendorSpot extends IVendorSpotBase {
    products: IProduct[] | [];
}
