import { Component, HostListener, ViewEncapsulation } from '@angular/core'
import { trigger, state, style, transition, animate } from '@angular/animations'
import { Router } from '@angular/router'
import { MenuItem } from 'primeng/api'
import { SessionService } from '../../../service/session.service'
import { CartService } from '../../../service/cart.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './buscar.scss','./sidebar.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('scrollAnimation', [
      state(
        'true',
        style({ backgroundColor: 'transparent', boxShadow: 'none' }),
      ),
      state(
        'false',
        style({
          backgroundColor: '#ffffff',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        }),
      ),
      transition('true => false', animate('300ms ease')),
      transition('false => true', animate('300ms ease')),
    ]),
  ],

})
export class HeaderComponent {
  items: MenuItem[] | undefined
  showSearchInput: boolean = false
  isScrolled: boolean = false
  isMobile: boolean = false
  // showMenu: boolean = false
  showCart: boolean = false
  sidebarVisible2: boolean = false
  admmenu: boolean = false

  mostrarSubmenu: boolean = false
  userName: string | undefined
  userRol: string | undefined
  showUserName!: boolean
  badge: number = 0;
  toggleSubmenu() {
    this.mostrarSubmenu = !this.mostrarSubmenu
  }

  // redirectTo(ruta: string) {
  //   // redirige a la ruta especificada
  // }

  constructor(
    private cartService: CartService,

    private sessionService: SessionService,private router: Router) {
    this.checkIsMobile()
    window.addEventListener('scroll', () => {
      this.isScrolled = window.scrollY > 0
    })
    window.addEventListener('resize', () => {
      this.checkIsMobile()
    })
    this.cartService.itemsInCart.subscribe((value) => {
      this.badge = value;
    });
  }

  ngOnInit() {
    const userData = this.sessionService.getUserData()

    if (userData && userData.name) {
      this.userName = userData.name;
      this.userRol = userData.rol;
      console.log(userData)

      this.showUserName = true;
    } else {
      this.showUserName = false;
    }
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
                icon: 'pi pi-fw pi-bookmark',
              },
              {
                label: 'Video',
                icon: 'pi pi-fw pi-video',
              },
            ],
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-trash',
          },
          {
            separator: true,
          },
          {
            label: 'Export',
            icon: 'pi pi-fw pi-external-link',
          },
        ],
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Left',
            icon: 'pi pi-fw pi-align-left',
          },
          {
            label: 'Right',
            icon: 'pi pi-fw pi-align-right',
          },
          {
            label: 'Center',
            icon: 'pi pi-fw pi-align-center',
          },
          {
            label: 'Justify',
            icon: 'pi pi-fw pi-align-justify',
          },
        ],
      },
      {
        label: 'Users',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-user-plus',
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-user-minus',
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
                    icon: 'pi pi-fw pi-print',
                  },
                ],
              },
              {
                icon: 'pi pi-fw pi-bars',
                label: 'List',
              },
            ],
          },
        ],
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
                icon: 'pi pi-fw pi-calendar-plus',
              },
              {
                label: 'Delete',
                icon: 'pi pi-fw pi-calendar-minus',
              },
            ],
          },
          {
            label: 'Archieve',
            icon: 'pi pi-fw pi-calendar-times',
            items: [
              {
                label: 'Remove',
                icon: 'pi pi-fw pi-calendar-minus',
              },
            ],
          },
        ],
      },
      {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off',
      },
    ]
  }
  // ngOnInit(): void {
  //   const userData = this.sessionService.getUserData()
  // }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0
  }

  toggleSearchInput(): void {
    this.showSearchInput = !this.showSearchInput
  }

  toggleMenu(): void {
    console.log('presionado')
    this.sidebarVisible2 = !this.sidebarVisible2
    // this.showMenu = !this.showMenu
  }
  toggleMenuADMIN(): void {
    this.admmenu = !this.admmenu

  }

  checkIsMobile(): void {
    this.isMobile = window.innerWidth <= 768
  }

  redirectTo(route: string): void {

    this.sidebarVisible2 = false
    this.admmenu = false
    // this.sidebarVisible2 = !this.sidebarVisible2
    console.log(route)
    if (route === 'login') {
      this.router.navigate(['/auth/login']) // Navegación hacia la página de inicio de sesión
    } else {
      this.router.navigate(['/public', route]) // Navegación hacia otras páginas públicas
    }
  }

  redirectToMobil(route: string): void {

    this.sidebarVisible2 = !this.sidebarVisible2
    console.log(route)
    if (route === 'login') {
      this.router.navigate(['/auth/login']) // Navegación hacia la página de inicio de sesión
    } else {
      this.router.navigate(['/public', route]) // Navegación hacia otras páginas públicas
    }
  }

  logout(): void {
    // Remover el token de sesión
    this.sessionService.removeToken();

    // Ocultar el mensaje de bienvenida y el nombre de usuario
    this.showUserName = false;

    // Reiniciar el estado del componente
    this.ngOnInit();

    // Ocultar los menús laterales
    this.sidebarVisible2 = false;
    this.admmenu = false;

    // Limpiar el rol del usuario
    this.userRol = undefined;

    // Navegar a la página de inicio pública
    this.router.navigate(['/public']);
  }

  redirectToAdmin(route: string): void {

    this.admmenu = !this.admmenu
    console.log(route)
    if (route === 'login') {
      this.router.navigate(['/auth/login']) // Navegación hacia la página de inicio de sesión
    } else {
      this.router.navigate(['/admin', route]) // Navegación hacia otras páginas públicas
    }
  }


}
