import { Component, Input } from '@angular/core';
import { CartItem } from '../../../../../shared/models/cart.model';
import { CartService } from '../../../../../core/service/cart.service';
import { StorageService } from '../../../../../core/service/storage.service';

@Component({
  selector: 'app-carrito-float',
  templateUrl: './carrito-float.component.html',
  styleUrl: './carrito-float.component.scss'
})
export class CarritoFloatComponent {
  badge: number = 0;
  @Input() carData: CartItem[] = []; // Recibe los datos del carrito desde el componente padre
  constructor(private cartService: CartService,
    private storageService: StorageService,) {


  }
  ngOnInit() {
    this.cartService.itemsInCart.subscribe((value) => {
      this.badge = value;
    });
        // Obtener los datos del carrito desde algún servicio o almacenamiento local
        const carDataFromStorage = this.storageService.getCarrito();

        // Asignar los datos del carrito al arreglo carData
        if (carDataFromStorage) {
          this.carData = carDataFromStorage;
          this.badge = this.carData.length; // Actualizar el contador badge

        }
  }
}
