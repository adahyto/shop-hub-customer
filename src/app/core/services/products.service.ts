import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../models/products';
import { inCategory, product, products, searchName } from './../endpoints/endpoints';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    constructor(private api: ApiService) {}

    getAll(): Observable<IProduct[]> {
        return this.api.get(products(environment.apiUrl));
    }

    getById(id: string): Observable<IProduct> {
        return this.api.get(product(environment.apiUrl, id));
    }

    getByCategory(category: string): Observable<IProduct[]> {
        return this.api.get(inCategory(environment.apiUrl, category));
    }

    searchByName(query: string): Observable<IProduct[]> {
        return this.api.get(searchName(environment.apiUrl, query));
    }
}
