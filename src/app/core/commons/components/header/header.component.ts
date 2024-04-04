import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls:[
    './header.component.scss',
    './buscar.scss',
  ],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('scrollAnimation', [
      state('true', style({ backgroundColor: 'transparent', boxShadow: 'none' })),
      state('false', style({ backgroundColor: '#ffffff', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' })),
      transition('true => false', animate('300ms ease')),
      transition('false => true', animate('300ms ease')),
    ])
  ]
})
export class HeaderComponent {
  showSearchInput: boolean = false;
  isScrolled: boolean = false;
  isMobile: boolean = false;
  showMenu: boolean = false;
  showCart: boolean = false;

  constructor() {
    this.checkIsMobile();
    window.addEventListener('scroll', () => {
      this.isScrolled = window.scrollY > 0;
    });
    window.addEventListener('resize', () => {
      this.checkIsMobile();
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }

  toggleSearchInput(): void {
    this.showSearchInput = !this.showSearchInput;
  }

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }

  checkIsMobile(): void {
    this.isMobile = window.innerWidth <= 768;
  }
}
