import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MercadoPagoService {

  constructor(private http: HttpClient) { }

  createOrder(body: any): Observable<any> {
    return this.http.post<any>(`${environment.api}/mercado/create-order`, body);
  }

  executePayment(token: string): Observable<any> {
    // Uncomment this method and implement it if needed
    // This method sends a POST request to execute a payment
    return this.http.post<any>(`${environment.api}/mercado/execute-payment?token=${token}`, {});
  }
}
