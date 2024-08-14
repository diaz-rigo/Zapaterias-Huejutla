import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adm-home',
  templateUrl: './adm-home.view.html',
  // styleUrls: ['./adm-home.view.scss'],
  styleUrls: [
    "../../admin.component.scss",
    "./adm-home.view.scss",
    "./menu.scss",
  ],
  encapsulation: ViewEncapsulation.None
})
export class AdmHomeView {
  // activeLink: string = '';
  openSubmenu: string | null = null;
  activeLink: HTMLElement | null = null;
  constructor(private router: Router) {}

  ngOnInit() {
  }


  redirectToAdmin(route: string): void {
    console.log(route);
    if (route === 'login') {
      this.router.navigate(['/auth/login']); // Navegación hacia la página de inicio de sesión
    } else {
      this.router.navigate(['/admin', route]); // Navegación hacia otras páginas públicas
    }
  }

  setActiveLink(event: Event): void {
    const target = event.currentTarget as HTMLElement;

    if (this.activeLink) {
      this.activeLink.classList.remove("m-tree__itemContent__selected");
    }

    target.classList.add("m-tree__itemContent__selected");
    this.activeLink = target;
  }

  toggleSubmenu(submenuId: string) {
    this.openSubmenu = this.openSubmenu === submenuId ? null : submenuId;
  }
}
