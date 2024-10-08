import {
  Component,
  ElementRef,
  Input,
  HostListener,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core'
import { trigger, state, style, transition, animate } from '@angular/animations'
import { Router } from '@angular/router'
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api'
import { SessionService } from '../../../service/session.service'
import { CartService } from '../../../service/cart.service'
import { HeaderService } from '../../../service/header.service'
import { StorageService } from '../../../service/storage.service'
import { CartItem } from '../../../../shared/models/cart.model'
import { DialogService } from 'primeng/dynamicdialog'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.scss',
    './buscar.scss',
    './carrito.scss',
    './sidebar.scss',
  ],
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

  providers: [DialogService, ConfirmationService, MessageService],
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
  badge: number = 0
  fechaTexto!: string;

  totalAmount!: number

  showHeader: boolean = false // Variable para controlar si se encontraron resultados

  query: string = '' // Inicializar la variable query

  @Input() carData: CartItem[] = [] // Recibe los datos del carrito desde el componente padre
  // @Input() product!: Product;
  // visible: boolean = false;

  toggleSubmenu() {
    this.mostrarSubmenu = !this.mostrarSubmenu
  }

  decrementQuantity(item: CartItem): void {
    // Decrementa la cantidad del artículo en el carrito si es mayor que 1
    if (item.cantidad > 1) {
      item.cantidad--
    }

    // Luego, puedes llamar al servicio para actualizar el carrito, si es necesario
    this.cartService.decre(item)
  }

  incrementQuantity(item: CartItem): void {
    this.cartService.add(item)
    item.cantidad++ // Incrementa la cantidad del artículo en el carrito
  }
  confirm2(event: Event, item: CartItem) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: '¿Estás seguro de que quieres eliminar este elemento?',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'p-button-danger p-button-sm',
      accept: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Eliminado',
          detail: `El producto "${item.name}" ha sido eliminado del carrito`,
          life: 3000,
        })
        // console.log(item);
        this.removeItem(item)
      },
      reject: () => {},
    })
  }
  // constructor(private headerService: HeaderService) { }

  constructor(
    private headerService: HeaderService,
    private cartService: CartService,
    private storageService: StorageService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private sessionService: SessionService,
    private router: Router,
  ) {
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

    this.cartService.cartItems$.subscribe((items) => {
      this.carData = items;
      this.totalAmount = this.getTotalAmount();
    });

    this.cartService.totalPrice$.subscribe((totalPrice) => {
      this.totalAmount = totalPrice;
    });
  }
  getTotalAmount(): number {
    return this.carData.reduce(
      (total, item) => total + item.precio * item.cantidad,
      0,
    ) // Calcula el importe total del carrito
  }
  updateBadge(): void {
    this.badge = this.cartService.quantity
  }

  decrementItem(item: CartItem): void {
    this.cartService.decre(item)
  }

  incrementItem(item: CartItem): void {
    this.cartService.add(item)
  }

  removeItem(item: CartItem): void {
    this.cartService.remove(item)
  }

  getTotalPrice(): number {
    return this.cartService.calculateTotalPrice()
  }
  @ViewChild('searchInput') searchInput!: ElementRef // Referencia al elemento input

  // constructor(private router: Router) { }

  search(): void {
    const query = this.searchInput.nativeElement.value.trim() // Obtener el valor del input y eliminar espacios en blanco
    console.log('Hola mundo,estoy buscando', query)
    if (query) {
      console.log('Hola mundo,estoy  ', query)

      this.router.navigate(['/public/search', query])
    }
  }

  ngOnInit() {
    const userData = this.sessionService.getUserData()
    this.fechaTexto = this.obtenerFechaTexto();

    this.cartService.itemsInCart.subscribe((value) => {
      this.badge = value
    })
    // Obtener los datos del carrito desde algún servicio o almacenamiento local
    const carDataFromStorage = this.storageService.getCarrito()

    // Asignar los datos del carrito al arreglo carData
    if (carDataFromStorage) {
      this.carData = carDataFromStorage
      this.badge = this.carData.length // Actualizar el contador badge
    }
    this.cartService.totalPrice$.subscribe((totalPrice) => {
      this.totalAmount = totalPrice;
    });
    if (userData && userData.name) {
      this.userName = userData.name
      this.userRol = userData.rol
      console.log(userData)

      this.showUserName = true
    } else {
      this.showUserName = false
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

  obtenerFechaTexto() {
    let diasSemana = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ];
    let meses = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    let fecha = new Date();
    let diaSemana = diasSemana[fecha.getDay()];
    let mes = meses[fecha.getMonth()];
    let año = fecha.getFullYear();
    return `${diaSemana} / ${mes} / ${año}`;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0
  }

  toggleSearchInput(): void {
    this.showHeader = this.headerService.getShowHeader() // Assuming it returns boolean
    console.log('header=>', this.showHeader)

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
    this.sessionService.removeToken()

    // Ocultar el mensaje de bienvenida y el nombre de usuario
    this.showUserName = false

    // Reiniciar el estado del componente
    this.ngOnInit()

    // Ocultar los menús laterales
    this.sidebarVisible2 = false
    this.admmenu = false

    // Limpiar el rol del usuario
    this.userRol = undefined

    // Navegar a la página de inicio pública
    this.router.navigate(['/public'])
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

  visible: boolean = false

  position: string = 'top-right'

  showDialog() {
    this.position = 'top-right'
    this.visible = true
  }




  // ****//// && carrito

  finishPurchase(): void {
    this.visible = false;
    const carDataFromStorage = this.storageService.getCarrito();

    // Asignar los datos del carrito al arreglo carData
    if (carDataFromStorage) {
      this.carData = carDataFromStorage;
    }

    console.log('Datos del carrito:', this.carData);

    // debugger
    // this.router.navigate(['/public'])
    this.router.navigate(['/payment/order-detail']);

    // Lógica para finalizar la compra
  }

}
