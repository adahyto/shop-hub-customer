export const signup = (baseUrl: string): string => `${baseUrl}/signup`;
export const signin = (baseUrl: string): string => `${baseUrl}/signin`;

export const identity = (baseUrl: string): string => `${baseUrl}`;
export const newAddress = (baseUrl: string): string => `${identity(baseUrl)}/add-address`;

export const products = (baseUrl: string): string => `${baseUrl}/products`;
export const product = (baseUrl: string, id: string): string => `${products(baseUrl)}/${id}`;
export const inCategory = (baseUrl: string, category: string): string => `${products(baseUrl)}/${category}`;
export const searchName = (baseUrl: string, query: string): string => `${products(baseUrl)}/${query}`;

export const vendorSpots = (baseUrl: string): string => `${baseUrl}/shops`;
export const vendorSpot = (baseUrl: string, id: string): string => `${vendorSpots(baseUrl)}/${id}`;

export const orders = (baseUrl: string): string => `${baseUrl}/orders`;
export const newOrder = (baseUrl: string): string => `${orders(baseUrl)}/new`;
