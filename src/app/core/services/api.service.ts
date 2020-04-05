import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(private http: HttpClient) {}

    private formatErrors(error: any) {
        return throwError(error.error);
    }

    httpOptions() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'multipart/json',
            }),
        };
    }

    get(path: string, httpOptions = this.httpOptions()): Observable<any> {
        return this.http.get(`${path}`, httpOptions).pipe(catchError(this.formatErrors));
    }

    put(path: string, body: object = {}, httpOptions = this.httpOptions()): Observable<any> {
        return this.http.put(`${path}`, body, httpOptions).pipe(catchError(this.formatErrors));
    }

    post(path: string, body: object = {}): Observable<any> {
        console.log('apiser', body);
        return this.http.post(`${path}`, body).pipe(catchError(this.formatErrors));
    }

    delete(path: string, httpOptions = this.httpOptions()): Observable<any> {
        return this.http.delete(`${path}`, httpOptions).pipe(catchError(this.formatErrors));
    }
}
