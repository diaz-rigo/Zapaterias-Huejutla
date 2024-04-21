import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria-marca-list-products',
  templateUrl: './categoria-marca-list-products.component.html',
  styleUrl: './categoria-marca-list-products.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class CategoriaMarcaListProductsComponent {


  constructor(private router: Router) {}

  redirectTo(route: string): void {
    // this.sidebarVisible = false;
    console.log(route);
    this.router.navigate(['/public', route]); // Utiliza la navegación de Angular
  }


}
