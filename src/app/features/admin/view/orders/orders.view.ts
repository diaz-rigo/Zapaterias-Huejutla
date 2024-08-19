import { Component, OnInit } from '@angular/core';
import { Purchase } from '../../../payment/interfaces/Purchase.interface';
import { OrderService } from '../../../payment/commons/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.view.html',
  styleUrls: ['./orders.view.scss']
})
export class OrdersView implements OnInit {

  purchases: Purchase[] = [];  // Cambiado a una lista de compras

  constructor(private purchaseService: OrderService) { }
  ngOnInit(): void {
    this.purchaseService.getPurchase().subscribe(data => {
      this.purchases = data;
      console.log("Purchases data:", this.purchases); // Debes ver el array de compras aquí
    });
  }

}
