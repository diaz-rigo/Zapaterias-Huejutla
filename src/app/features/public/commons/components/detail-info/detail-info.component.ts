import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ProductResponse } from '../../../../admin/models/Product-detail.model'
import { FormControl, FormGroup } from '@angular/forms'
import { CartService } from '../../../../../core/service/cart.service'
import { CartItem } from '../../../../../shared/models/cart.model'
import { ScrollServiceService } from '../../../../../shared/services/scroll-service.service'
import { noop } from 'chart.js/dist/helpers/helpers.core';

// product-detail.model.ts
export interface Size {
  size: string;
  stock: number;
}
@Component({
  selector: 'app-detail-info',
  templateUrl: './detail-info.component.html',
  styleUrl: './detail-info.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class DetailInfoComponent {
  value1: number = 1
  product!: ProductResponse
  formGroup!: FormGroup
  quantity!: FormControl
  previousPrice: number | undefined;
  selectedSize: Size | undefined;
  isButtonDisabled: boolean = false;

  @Input() productDetail: ProductResponse | undefined
  constructor(
    private scrollService: ScrollServiceService,
    // private router: Router,
    private cartService: CartService,
  ) {
    this.formGroup = new FormGroup({
      quantity: new FormControl(),
    })
  }
  value: any;


  ngOnInit(): void {
    this.scrollService.init()
    // this.scrollService.init();

    this.isButtonDisabled = this.productDetail?.sizes.some(size => size.stock === 0) || false;
    // Calcula el precio anterior después de que el componente se inicialice
    if (this.productDetail) {
      this.calculatePreviousPrice();
    }
  }
  calculatePreviousPrice() {
    if (this.productDetail?.price !== undefined) {
      this.previousPrice = this.productDetail.price * 1.20;
    }
  }
  addItem(): void {
    const value = this.formGroup.get('quantity')!.value
    const productId = this.productDetail!._id

    // Verificar si el producto ya está en el carrito
    const existingCartItem = this.cartService.getCartItem(productId)

    if (existingCartItem) {
      // Si el producto ya está en el carrito, incrementar la cantidad
      this.cartService.updateQuantity(
        productId,
        existingCartItem.cantidad + value,
      )
    } else {
      // Si el producto no está en el carrito, agregarlo
      const cartItem: CartItem = {
        id: this.productDetail!._id,
        name: this.productDetail!.name,
        precio: this.productDetail!.price,
        cantidad: value,
        image: this.productDetail!.images, // Corregir el nombre de la propiedad
      }
      this.cartService.add(cartItem)
    }
  }
}
