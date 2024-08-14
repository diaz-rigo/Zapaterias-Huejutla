import { Component, HostListener, ViewEncapsulation } from '@angular/core'
import { Router } from '@angular/router'
import { ConfirmationService, MessageService } from 'primeng/api'
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog'
import { ProductFormComponent } from '../../commons/components/product-form/product-form.component'
import { ProductService } from '../../commons/service/product.service'
import { IProduct } from '../../interfaces/Product.interface'
import { FormBuilder, FormGroup } from '@angular/forms'
import { debounceTime, distinctUntilChanged } from 'rxjs'


@Component({
  selector: 'app-producto',
  templateUrl: './producto.view.html',
  styleUrl: './producto.view.scss',
  providers: [DialogService, ConfirmationService, MessageService],
})
export class ProductoView {
  agregar: boolean = false
  productos: IProduct[] = []
  searchForm: FormGroup;
  isWebMode: boolean = window.innerWidth >= 768 // Define la condición inicial para el modo web
  ref: DynamicDialogRef | undefined
  isMobile: boolean = window.innerWidth < 768; // Inicializar basado en el tamaño de la ventana
  pageSizeOptions: number[] = [3, 10, 25];
  pageIndex: number = 0;
  pageSize: number = 3;
  totalProducts: number = 0;
    // New properties
    displayVariantModal: boolean = false;
    selectedVariants: any[] = [];
  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private productService: ProductService,
    private dialogService: DialogService,
    private router: Router,    private fb: FormBuilder,

  ) {
    this.searchForm = this.fb.group({
      query: [''],
    });

    this.searchForm.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe(() => {
        // this.pageIndex = 0;
        // this.searchProducts();
      });
  }
  ngOnInit(): void {
   
    this.getAllProducts()
  }

  getAllProducts(): void {
    this.productService.getAllProducts().subscribe(
      (response: IProduct[]) => {
        // console.log(response)
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

  editprod(product: IProduct) { // Cambia 'any' por 'IProduct'
    this.openProductDialog(true, product);
  }
  private openProductDialog(isEditing: boolean, product: IProduct | null) {
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
  
  onPageChange(event: any): void {
    this.pageIndex = event.first / event.rows;  // Calcula pageIndex
    this.pageSize = event.rows;  // Asigna pageSize
    this.getAllProducts();
  }
  showVariantDetails(variants: any[]) {
    // You can use a modal or dropdown to display these details.
    console.log("Variant Details:", variants);
    // For example, open a modal with the variant details.
    this.selectedVariants = variants;
    this.displayVariantModal = true; // Assuming you have a modal bound to this variable.
  }
  
}
