import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { newOrder, orders } from './../endpoints/endpoints';
import { IOrder, IOrderResponse } from './../models/order';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root',
})
export class OrdersService {
    constructor(private api: ApiService) {}

    history(): Observable<IOrder[]> {
        return this.api.get(orders(environment.apiUrl));
    }

    new(order: IOrder): Observable<IOrderResponse> {
        return this.api.post(newOrder(environment.apiUrl), order);
    }
}
