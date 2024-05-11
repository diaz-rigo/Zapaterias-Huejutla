import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ProductFormComponent {

  product: any = { // Inicializa el objeto product con propiedades vacías
    name: '',
    sku: '',
    description: '',
    brand: '',
    color: '',
    size: '',
    material: '',
    gender: '',
    ageGroup: '',
    quantity: null,
    price: null,
    category: '',
    status: '',
    weight: null,
    shoeAttributes: {
      soleType: '',
      heelHeight: null
    }
  };

  constructor( private router: Router) { }

  agregarProducto() {
 
  }
}
