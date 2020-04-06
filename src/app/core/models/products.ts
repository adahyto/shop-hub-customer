export interface IProductBase {
    _id: string;
    price: number;
    name: string;
}

export interface IProduct extends IProductBase {
    description: string;
    categories: string[];
    additionalDetails: string;
}
