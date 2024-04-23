import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria-lista',
  templateUrl: './categoria-lista.component.html',
  styleUrl: './categoria-lista.component.scss'
})
export class CategoriaListaComponent {
  // 4
  categories = [
    { name: 'Zapatos', selected: false },
    { name: 'Tenis', selected: false },
    { name: 'Sandalias', selected: false },
    { name: 'Botas', selected: false }
  ];

  selectCategory(category: any) {
    this.categories.forEach(cat => cat.selected = false); // Deseleccionar todas las categorías
    category.selected = true; // Seleccionar la categoría clicada
  }

  constructor(private router:Router) {
    
  }
  redirectTo: string = '';
}
