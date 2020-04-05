import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ILoginRequest, ILoginResponse, IRegisterRequest, IRegisterResponse } from '../models/auth';
import { UserFacade } from '../store/user/user.facade';
import { signin, signup } from './../endpoints/endpoints';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private api: ApiService, private userFacade: UserFacade) {}

    isAuthenticated(): boolean {
        let authenticated = false;
        this.userFacade.token$
            .subscribe((token) => {
                token ? (authenticated = true) : (authenticated = false);
                console.log(authenticated);
            })
            .unsubscribe();
        return authenticated;
    }

    signIn(loginReq: ILoginRequest): Observable<ILoginResponse> {
        return this.api.post(signin(environment.apiUrl), loginReq.user);
    }

    signUp(registerReq: IRegisterRequest): Observable<IRegisterResponse> {
        return this.api.post(signup(environment.apiUrl), registerReq.user);
    }
}
