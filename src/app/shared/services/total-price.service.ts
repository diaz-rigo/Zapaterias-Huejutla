import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TotalPriceService {
  totalPrice: number = 0;

  constructor() {}

  updateTotalPrice(newTotalPrice: number): void {
    this.totalPrice = newTotalPrice;
  }
}
