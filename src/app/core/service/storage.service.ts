import { Injectable } from '@angular/core';
import { CartItem } from '../../shared/models/cart.model';

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
    const carrito = localStorage.getItem(this.keyCart);
    return carrito ? JSON.parse(carrito) : [];
  }

  setToken(token: string): void {
    localStorage.setItem(this.keyToken, JSON.stringify(token));
  }

  getToken(): string {
    return localStorage.getItem(this.keyToken) || ''; // Devuelve cadena vacía si no hay token
  }
}
