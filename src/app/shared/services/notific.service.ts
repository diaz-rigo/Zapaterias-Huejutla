import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificService {
  constructor(private http: HttpClient) { }

  sendSubscription(subscription: any) {
    const url = `${environment.api}/pushSubscription`;

    return this.http.post(url, subscription);
  }
}
