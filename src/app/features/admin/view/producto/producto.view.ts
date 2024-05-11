import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.view.html',
  styleUrl: './producto.view.scss',
  encapsulation: ViewEncapsulation.None
})
export class ProductoView {
  agregar:boolean=false
  // constructor(private router: Router) { }
  productos: any[] = []; // Define la propiedad productos como un array vacío

  constructor(private router: Router) {
    // Aquí podrías inicializar la propiedad productos con los datos que desees mostrar en la tabla
    this.productos = [
      { id: 1, nombre: 'Producto 1', descripcion: 'Descripción del producto 1' },
      { id: 2, nombre: 'Producto 2', descripcion: 'Descripción del producto 2' }
    ];
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
}
