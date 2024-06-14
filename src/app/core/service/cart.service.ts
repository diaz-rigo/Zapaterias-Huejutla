import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { StorageService } from './storage.service';
import { CartItem } from '../../shared/models/cart.model';
import { TotalPriceService } from '../../shared/services/total-price.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: CartItem[] = [];
  itemsInCart: Subject<number> = new Subject<number>();
  quantity: number = 0;
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();
  totalPrice$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(

    private storageService: StorageService,
    private totalPriceService: TotalPriceService
  ) {
    this.loadCart();
  }


  updateCartItems(items: CartItem[]): void {
    this.cartItemsSubject.next(items);
  }

  add(cartItem: CartItem): void {
    console.log('Adding to cart:', cartItem);
    let isExist = false;
    this.cart.forEach((item) => {
      if (item.id === cartItem.id && item.variantId === cartItem.variantId && item.size === cartItem.size && item.color === cartItem.color) {
        item.cantidad += cartItem.cantidad;
        isExist = true;
      }
    });
    if (!isExist) {
      this.cart.push(cartItem);
    }
    this.sendQuantity();
    this.updateTotalPrice();
    this.storageService.setCarrito(this.cart);
    this.updateCartItems(this.cart);

  }

  decre(cartItem: CartItem): void {
    this.cart.forEach((item) => {
      if (item.id === cartItem.id && item.variantId === cartItem.variantId && item.size === cartItem.size && item.color === cartItem.color && item.cantidad > 0) {
        item.cantidad--;
      }
    });
    this.sendQuantity();
    this.updateTotalPrice();
    this.storageService.setCarrito(this.cart);
    this.updateCartItems(this.cart);

  }

  remove(cartItem: CartItem): void {
    this.cart = this.storageService.getCarrito();
    this.cart = this.cart.filter(item => !(item.id === cartItem.id && item.variantId === cartItem.variantId && item.size === cartItem.size && item.color === cartItem.color));
    this.sendQuantity();
    this.updateTotalPrice();
    this.storageService.setCarrito(this.cart);
    this.updateCartItems(this.cart);

  }

  private sendQuantity(): void {
    this.quantity = this.cart.reduce((total, item) => total + item.cantidad, 0);
    this.itemsInCart.next(this.quantity);
  }

  private updateTotalPrice(): void {
    const totalPrice = this.calculateTotalPrice();
    this.totalPriceService.updateTotalPrice(totalPrice);
  }

   calculateTotalPrice(): number {
    return this.cart.reduce((total, item) => total + item.precio * item.cantidad, 0);
  }

  getCartItem(productId: string, variantId: string, size: number, color: string): CartItem | undefined {
    return this.cart.find(item => item.id === productId && item.variantId === variantId && item.size === size && item.color === color);
  }

  updateQuantity(productId: string, variantId: string, size: number, color: string, newQuantity: number): void {
    const cartItem = this.cart.find(item => item.id === productId && item.variantId === variantId && item.size === size && item.color === color);
    if (cartItem) {
      cartItem.cantidad = newQuantity;
      this.sendQuantity();
      this.updateTotalPrice();
      this.storageService.setCarrito(this.cart);
    }
  }

  private loadCart(): void {
    this.cart = this.storageService.getCarrito() || [];
    this.sendQuantity();
    this.updateTotalPrice();
  }

}
