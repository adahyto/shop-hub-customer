import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserFacade } from './../store/user/user.facade';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private userFacade: UserFacade) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let modified = req.clone();
        this.userFacade.token$.subscribe((token) => {
            if (token) {
                modified = req.clone({
                    setHeaders: { Authorization: `Bearer ${token}` },
                });
            }
        });
        return next.handle(modified);
    }
}
