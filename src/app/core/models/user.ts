import { IAddress } from './location';

export interface IContactDetails {
    email: string;
    phone: string;
}

export interface IUser {
    _id: string;
    username: string;
    addresses: IAddress[];
    contactDetails: IContactDetails;
}