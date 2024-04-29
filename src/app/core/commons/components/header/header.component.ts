import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
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
  items: MenuItem[] | undefined;
  showSearchInput: boolean = false;
  isScrolled: boolean = false;
  isMobile: boolean = false;
  showMenu: boolean = false;
  showCart: boolean = false;
  sidebarVisible2: boolean = false;

  mostrarSubmenu: boolean = false;

  toggleSubmenu() {
    this.mostrarSubmenu = !this.mostrarSubmenu;
  }

  // redirectTo(ruta: string) {
  //   // redirige a la ruta especificada
  // }


  constructor(private router :Router) {
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
    console.log("presionado")
    this.sidebarVisible2 = !this.sidebarVisible2;
    this.showMenu = !this.showMenu;
  }

  checkIsMobile(): void {
    this.isMobile = window.innerWidth <= 768;
  }

  redirectTo(route: string): void {
    console.log(route);
    if (route === 'login') {
      this.router.navigate(['/auth/login']); // Navegación hacia la página de inicio de sesión
    } else {
      this.router.navigate(['/public', route]); // Navegación hacia otras páginas públicas
    }
  }
  


  
  ngOnInit() {
    this.items = [
      {
        label: 'File',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            items: [
              {
                label: 'Bookmark',
                icon: 'pi pi-fw pi-bookmark'
              },
              {
                label: 'Video',
                icon: 'pi pi-fw pi-video'
              }
            ]
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-trash'
          },
          {
            separator: true
          },
          {
            label: 'Export',
            icon: 'pi pi-fw pi-external-link'
          }
        ]
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Left',
            icon: 'pi pi-fw pi-align-left'
          },
          {
            label: 'Right',
            icon: 'pi pi-fw pi-align-right'
          },
          {
            label: 'Center',
            icon: 'pi pi-fw pi-align-center'
          },
          {
            label: 'Justify',
            icon: 'pi pi-fw pi-align-justify'
          }
        ]
      },
      {
        label: 'Users',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-user-plus'
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-user-minus'
          },
          {
            label: 'Search',
            icon: 'pi pi-fw pi-users',
            items: [
              {
                label: 'Filter',
                icon: 'pi pi-fw pi-filter',
                items: [
                  {
                    label: 'Print',
                    icon: 'pi pi-fw pi-print'
                  }
                ]
              },
              {
                icon: 'pi pi-fw pi-bars',
                label: 'List'
              }
            ]
          }
        ]
      },
      {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              {
                label: 'Save',
                icon: 'pi pi-fw pi-calendar-plus'
              },
              {
                label: 'Delete',
                icon: 'pi pi-fw pi-calendar-minus'
              }
            ]
          },
          {
            label: 'Archieve',
            icon: 'pi pi-fw pi-calendar-times',
            items: [
              {
                label: 'Remove',
                icon: 'pi pi-fw pi-calendar-minus'
              }
            ]
          }
        ]
      },
      {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off'
      }
    ];
  }




}
