import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from '../../../../admin/interfaces/Product.interface';

@Component({
  selector: 'app-categoria-marca-list-products',
  templateUrl: './categoria-marca-list-products.component.html',
  styleUrls: ['./categoria-marca-list-products.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CategoriaMarcaListProductsComponent {
  @Input()
  product!: IProduct; // Asegúrate de inicializar el input product

  starsArray = Array(5).fill(0); // Array para las estrellas

  constructor(private router: Router) {}

  redirectTo(route: string): void {
    this.router.navigate(['/public', route]); // Utiliza la navegación de Angular
  }

  goToDetail(product: IProduct): void {
    this.router.navigateByUrl(`public/detail/${product._id}`); // Navega a la página de detalle del producto
  }

  ngOnInit(): void {
    console.log(this.product); // Asegúrate de que el producto se carga correctamente
  }

  get firstVariant() {
    return this.product.variants[0]; // Obtén la primera variante del producto
  }
}
