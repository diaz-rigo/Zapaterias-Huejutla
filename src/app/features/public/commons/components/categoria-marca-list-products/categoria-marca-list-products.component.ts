import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { IproductResponse } from '../../../../admin/interfaces/Product.interface';

@Component({
  selector: 'app-categoria-marca-list-products',
  templateUrl: './categoria-marca-list-products.component.html',
  styleUrl: './categoria-marca-list-products.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class CategoriaMarcaListProductsComponent {


  @Input() product!: IproductResponse;


  constructor(private router: Router) {}

  redirectTo(route: string): void {
    // this.sidebarVisible = false;
    console.log(route);
    this.router.navigate(['/public', route]); // Utiliza la navegación de Angular
  }

  ngOnInit(): void {



  }

  goToDetail(): void {

    // console.log(this.product.name)
    // console.log(this.product._id)
    this.router.navigateByUrl(`public/detail/${this.product._id}`);
  }
}
