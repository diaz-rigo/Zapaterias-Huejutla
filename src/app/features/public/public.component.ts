import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrl: './public.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PublicComponent {
  constructor(private router: Router) {}

  redirectTo(route: string): void {
    // this.sidebarVisible = false;
    this.router.navigate(['/public', route]); // Utiliza la navegación de Angular
  }
}
