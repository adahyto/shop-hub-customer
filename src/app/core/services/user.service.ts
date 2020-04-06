import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { identity } from './../endpoints/endpoints';
import { IUser } from './../models/user';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private api: ApiService) {}

    me(): Observable<IUser> {
        return this.api.post(identity(environment.apiUrl));
    }

}
