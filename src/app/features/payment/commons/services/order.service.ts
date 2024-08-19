import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }


  updatePurchaseStatus(token: string): Observable<any> {
    return this.http.post(`${environment.api}/purchase/update-purchase-status`, { token });
  }
 

}
