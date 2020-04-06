interface ILocale {
  lat: string;
  long: string;
}

export interface IAddress {
    name: string;
    locale: ILocale;
    city: string;
    street: string;
}
