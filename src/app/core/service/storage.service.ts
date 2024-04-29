import { Injectable } from '@angular/core';
import { CartItem } from '../../shared/models/cart.model';
// import { CartItem } from 'src/app/shared/models/cart.model';
// import { CartItem } from 'src/app/shared/models/cart.model';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private keyCart: string = 'carrito';
  private keyToken: string = 'token';

  constructor() {}
  setCarrito(cart: CartItem[]): void {
    localStorage.setItem(this.keyCart, JSON.stringify(cart));
  }

  getCarrito(): CartItem[] {
    return JSON.parse(localStorage.getItem(this.keyCart)!) ///// verificar despues por  el "!" le puse para evitar el error
  }
  setToken(token: string): void {
    // debugger
    localStorage.setItem(this.keyToken, JSON.stringify(token));
  }

  getToken(): string{
    return localStorage.getItem(this.keyToken)! ///// verificar despues por  el "!" le puse para evitar el error
  }
}
