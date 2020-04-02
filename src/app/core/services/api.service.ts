import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    private apiUrl = environment.apiUrl;

    private formatErrors(error: any) {
        return throwError(error.error);
    }

    constructor(private http: HttpClient) {}

    get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
        return this.http.get(`${this.apiUrl}/${path}`, { params }).pipe(catchError(this.formatErrors));
    }

    put(path: string, body: object = {}): Observable<any> {
        return this.http.put(`${this.apiUrl}/${path}`, JSON.stringify(body)).pipe(catchError(this.formatErrors));
    }

    post(path: string, body: object = {}): Observable<any> {
        return this.http.post(`${this.apiUrl}/${path}`, JSON.stringify(body)).pipe(catchError(this.formatErrors));
    }

    delete(path: string): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${path}`).pipe(catchError(this.formatErrors));
    }
}
