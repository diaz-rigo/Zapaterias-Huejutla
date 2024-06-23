import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import {
  ProductResponse,
  IVariant,
  ISizeStock,
} from '../../../../admin/models/Product-detail.model'
import { CartService } from '../../../../../core/service/cart.service'
import { ScrollServiceService } from '../../../../../shared/services/scroll-service.service'
import { DialogService } from 'primeng/dynamicdialog'
import { ConfirmationService, MessageService } from 'primeng/api'
import { HeaderComponent } from '../../../../../core/commons/components/header/header.component'

@Component({
  selector: 'app-detail-info',
  templateUrl: './detail-info.component.html',
  styleUrls: ['./detail-info.component.scss', './zoom.scss'],
  providers: [
    DialogService,
    ConfirmationService,
    MessageService,
    HeaderComponent,
  ],
})
export class DetailInfoComponent implements OnInit {
  formGroup: FormGroup
  quantity: FormControl
  previousPrice: number | undefined
  selectedSize: ISizeStock | undefined
  sizeOptions: ISizeStock[] = []
  selectedVariant!: IVariant
  selectedVariantIndex: number = 0
  mainImage: string = ''
  productImages: string[] = []
  @ViewChild('zoomBox') zoomBox: ElementRef | undefined
  @Input() productDetail!: ProductResponse
  zoomActive: boolean = false
  constructor(
    private scrollService: ScrollServiceService,
    private cartService: CartService,
    private messageService: MessageService,
    private HeaderComponent: HeaderComponent,
  ) {
    this.formGroup = new FormGroup({
      quantity: new FormControl(1),
    })
    this.quantity = this.formGroup.get('quantity') as FormControl
  }

  ngOnInit(): void {
    this.scrollService.init()
    if (this.productDetail) {
      this.initializeSelectedVariant()
    }

    const zoomedImg = document.getElementById('zoomed-img')
    const zoomedContainer = document.querySelector('.image-zoom-container')

    if (zoomedImg && zoomedContainer instanceof HTMLElement) {
      zoomedContainer.addEventListener('mousemove', (e: MouseEvent) => {
        const containerRect = zoomedContainer.getBoundingClientRect()
        const x = (e.clientX - containerRect.left) / containerRect.width
        const y = (e.clientY - containerRect.top) / containerRect.height

        if (zoomedImg) {
          zoomedImg.style.transformOrigin = `${x * 100}% ${y * 100}%`
        }
      })

      zoomedContainer.addEventListener('mouseenter', () => {
        if (zoomedImg) {
          zoomedImg.classList.add('zoomed')
        }
      })

      zoomedContainer.addEventListener('mouseleave', () => {
        if (zoomedImg) {
          zoomedImg.classList.remove('zoomed')
        }
      })
    }
  }

  initializeSelectedVariant(): void {
    if (this.productDetail && this.productDetail.variants.length > 0) {
      this.selectedVariant = this.productDetail.variants[0]
      this.selectedVariantIndex = 0
      this.initializeSizeOptions()
      this.setMainImage(this.selectedVariant.images[0])
      this.calculatePreviousPrice()
      this.loadProductImages()
    }
  }

  initializeSizeOptions(): void {
    if (this.selectedVariant) {
      this.sizeOptions = this.selectedVariant.sizeStock
      this.selectedSize = this.sizeOptions[0] // Seleccionar la primera talla por defecto
    }
  }

  loadProductImages(): void {
    if (this.selectedVariant) {
      this.productImages = this.selectedVariant.images
    }
  }

  calculatePreviousPrice(): void {
    if (this.selectedVariant && this.selectedVariant.sizeStock.length > 0) {
      const currentPrice = this.selectedVariant.sizeStock[0].price
      this.previousPrice = currentPrice * 1.2
    }
  }

  addItem(): void {
    const quantity = this.formGroup.get('quantity')!.value
    const productId = this.productDetail._id
    console.log('Product ID:', productId)
    if (!this.selectedSize || !this.selectedVariant) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail:
          'Por favor selecciona talla y color antes de añadir al carrito.',
      })
      return
    }

    if (this.selectedSize && this.selectedVariant) {
      const variantId = this.selectedVariant._id
      console.log('Variant ID:', variantId)

      const existingCartItem = this.cartService.getCartItem(
        productId,
        variantId,
        this.selectedSize.size,
        this.selectedVariant.texture,
      )
      console.log('Existing Cart Item:', existingCartItem)

      if (existingCartItem) {
        this.cartService.updateQuantity(
          productId,
          variantId,
          this.selectedSize.size,
          this.selectedVariant.texture,
          existingCartItem.cantidad + quantity,
        )
      } else {
        const newItem = {
          id: productId,
          variantId: variantId,
          name: this.productDetail.name,
          precio: this.selectedSize.price,
          cantidad: quantity,
          image: this.selectedVariant.images[0],
          size: this.selectedSize.size,
          color: this.selectedVariant.texture,
        }
        console.log('Adding New Item to Cart:', newItem)
        this.cartService.add(newItem)
      }
      this.HeaderComponent.ngOnInit()
    }
  }

  selectVariant(index: number): void {
    this.selectedVariantIndex = index
    this.selectedVariant = this.productDetail.variants[index]
    this.setMainImage(this.selectedVariant.images[0])
    this.initializeSizeOptions()
    this.loadProductImages()
  }

  setMainImage(image: string): void {
    this.mainImage = image
  }

  selectSize(size: ISizeStock): void {
    this.selectedSize = size
  }

  buyItem(): void {
    console.log('Comprar ahora no está implementado aún')
  }
}
