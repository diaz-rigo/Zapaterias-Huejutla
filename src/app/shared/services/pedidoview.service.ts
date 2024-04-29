import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoviewService {
  
  private visibleSubject = new BehaviorSubject<boolean>(false);
  public visible$ = this.visibleSubject.asObservable();

  constructor() { }

  showDialog() {
    this.visibleSubject.next(true);
  }

  hideDialog() {
    this.visibleSubject.next(false);
  }
}
