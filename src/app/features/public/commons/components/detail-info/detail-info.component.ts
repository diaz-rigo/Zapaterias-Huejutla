import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductResponse, IVariant, ISizeStock } from '../../../../admin/models/Product-detail.model';
import { CartService } from '../../../../../core/service/cart.service';
import { ScrollServiceService } from '../../../../../shared/services/scroll-service.service';

@Component({
  selector: 'app-detail-info',
  templateUrl: './detail-info.component.html',
  styleUrls: ['./detail-info.component.scss'],
})
export class DetailInfoComponent implements OnInit {
  formGroup: FormGroup;
  quantity: FormControl;
  previousPrice: number | undefined;
  selectedSize: ISizeStock | undefined;
  sizeOptions: ISizeStock[] = [];
  selectedVariant!: IVariant;
  selectedVariantIndex: number = 0;
  mainImage: string = '';
  productImages: string[] = [];

  @Input() productDetail!: ProductResponse;

  constructor(
    private scrollService: ScrollServiceService,
    private cartService: CartService,
  ) {
    this.formGroup = new FormGroup({
      quantity: new FormControl(1),
    });
    this.quantity = this.formGroup.get('quantity') as FormControl;
  }

  ngOnInit(): void {
    this.scrollService.init();
    if (this.productDetail) {
      this.initializeSelectedVariant();
    }
  }

  initializeSelectedVariant(): void {
    if (this.productDetail && this.productDetail.variants.length > 0) {
      this.selectedVariant = this.productDetail.variants[0];
      this.selectedVariantIndex = 0;
      this.initializeSizeOptions();
      this.setMainImage(this.selectedVariant.images[0]);
      this.calculatePreviousPrice();
      this.loadProductImages();
    }
  }

  initializeSizeOptions(): void {
    if (this.selectedVariant) {
      this.sizeOptions = this.selectedVariant.sizeStock;
      this.selectedSize = this.sizeOptions[0]; // Seleccionar la primera talla por defecto
    }
  }

  loadProductImages(): void {
    if (this.selectedVariant) {
      this.productImages = this.selectedVariant.images;
    }
  }

  calculatePreviousPrice(): void {
    if (this.selectedVariant && this.selectedVariant.sizeStock.length > 0) {
      const currentPrice = this.selectedVariant.sizeStock[0].price;
      this.previousPrice = currentPrice * 1.2;
    }
  }

  addItem(): void {
    const quantity = this.formGroup.get('quantity')!.value;
    const productId = this.productDetail._id;

    const existingCartItem = this.cartService.getCartItem(productId);

    if (existingCartItem) {
      this.cartService.updateQuantity(productId, existingCartItem.cantidad + quantity);
    } else {
      // this.cartService.addToCart({
      //   id: productId,
      //   name: this.productDetail.name,
      //   price: this.selectedSize?.price || 0,
      //   cantidad: quantity,
      //   image: this.selectedVariant?.images[0] || '',
      // });
    }
  }

  selectVariant(index: number): void {
    this.selectedVariantIndex = index;
    this.selectedVariant = this.productDetail.variants[index];
    this.setMainImage(this.selectedVariant.images[0]);
    this.initializeSizeOptions();
    this.loadProductImages();
  }

  setMainImage(image: string): void {
    this.mainImage = image;
  }

  selectSize(size: ISizeStock): void {
    this.selectedSize = size;
  }

  buyItem(): void {
    console.log('Comprar ahora no está implementado aún');
  }
}
