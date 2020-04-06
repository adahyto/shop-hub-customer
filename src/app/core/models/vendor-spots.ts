import { IAddress } from './location';
import { IProduct } from './products';

export interface IVendorSpot {
    _id: string;
    vendorId: string;
    name: string;
    description: string;
    address: IAddress;
    products: IProduct[] | [];
}
