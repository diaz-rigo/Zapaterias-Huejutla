import { Component, HostListener, ViewEncapsulation } from '@angular/core'
import { Router } from '@angular/router'
import { ConfirmationService, MessageService } from 'primeng/api'
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog'
import { ProductFormComponent } from '../../commons/components/product-form/product-form.component'
import { IproductResponse } from '../../interfaces/Product.interface'
import { ProductService } from '../../commons/service/product.service'
@Component({
  selector: 'app-producto',
  templateUrl: './producto.view.html',
  styleUrl: './producto.view.scss',
  encapsulation: ViewEncapsulation.None,
  providers: [DialogService, ConfirmationService, MessageService],
})
export class ProductoView {
  agregar: boolean = false
  productos: IproductResponse[] = []

  isWebMode: boolean = window.innerWidth >= 768 // Define la condición inicial para el modo web
  ref: DynamicDialogRef | undefined

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private productService: ProductService,
    private dialogService: DialogService,
    private router: Router,
  ) {}
  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts(): void {
    this.productService.getAllProducts().subscribe(
      (response: IproductResponse[]) => {
        console.log(response)
        this.productos = response
      },
      (error) => {
        console.error('Error al obtener los productos:', error)
      },
    )
  }
  redirectToAdmin(route: string): void {
    // this.sidebarVisible2 = !this.sidebarVisible2
    console.log(route)
    if (route === 'login') {
      this.router.navigate(['/auth/login']) // Navegación hacia la página de inicio de sesión
    } else {
      this.router.navigate(['/admin', route]) // Navegación hacia otras páginas públicas
    }
  }
  createprod() {
    this.openProductDialog(false, null);
  }

  editprod(product: IproductResponse) { // Cambia 'any' por 'IproductResponse'
    this.openProductDialog(true, product);
  }
  private openProductDialog(isEditing: boolean, product: IproductResponse | null) { // Cambia 'any' por 'IproductResponse'
    // console.log(product)
    // this.sidebarVisible = false;
    const isMobile = window.innerWidth < 480

    this.ref = this.dialogService.open(ProductFormComponent, {
      header: isEditing ? 'Editar Producto' : 'Nuevo Producto',
      height: isMobile ? 'auto' : 'auto',
      style: {
        'max-width': isMobile ? '110vw' : 'auto',
        'max-height': isMobile ? 'auto' : '100vh',
        padding: '0', // Aquí estableces el padding a 0
      },
      modal: true,
      breakpoints: {
        '960px': '75vw',
        '640px': '100vw',
      },
      data: { product: product }, // Pasando el objeto product dentro de un objeto con la propiedad 'product'

    })

  }

  deleteProduct(productId: string): void {
    this.productService.deleteProduct(productId).subscribe(
      () => {
        // Eliminación exitosa, actualiza la lista de productos
        this.productos = this.productos.filter(
          (producto) => producto._id !== productId,
        )
      },
      (error) => {
        console.error('Error al eliminar el producto:', error)
      },
    )
  }
  eliminar(event: Event, productId: string) {
    // console.log("oprimido a elim")
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: '¿Estás seguro de que deseas eliminar este producto?',
      header: 'Confirmación de Eliminación',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'p-button-danger p-button-text',
      rejectButtonStyleClass: 'p-button-text p-button-text',
      acceptIcon: 'pi pi-check',
      rejectIcon: 'pi pi-times',

      accept: () => {
        this.deleteProduct(productId);
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmado',
          detail: 'Producto eliminado exitosamente',
        });
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Rechazado',
          detail: 'Has rechazado la eliminación del producto',
        });
      },
    });
  }

}
