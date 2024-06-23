import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StripeService {
  // http://localhost:3000/stripe/create-checkout-session
  constructor(private http: HttpClient) { }

  createCheckoutSession(body: any): Observable<any> {
    return this.http.post<any>(`${environment.api}/stripe/create-checkout-session`, body);
  }
}
