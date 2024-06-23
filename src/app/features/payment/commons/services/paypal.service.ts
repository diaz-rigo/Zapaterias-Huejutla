import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaypalService {

  constructor(private http: HttpClient) { }

  createPayment(body: any): Observable<any> {
    return this.http.post<any>(`${environment.api}/payment/`, body);
  }

  executePayment(token: string): Observable<any> {
    return this.http.post<any>(`${environment.api}/payment/execute-payment?token=${token}`, {});
  }
}
