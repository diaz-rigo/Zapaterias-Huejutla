import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.view.html',
  styleUrl: './home.view.scss',
  encapsulation: ViewEncapsulation.None
})
export class HomeView {



  constructor(private router: Router) {}

  redirectTo(route: string): void {
    // this.sidebarVisible = false;
    console.log(route);
    this.router.navigate(['/public', route]); // Utiliza la navegación de Angular
  }
}
