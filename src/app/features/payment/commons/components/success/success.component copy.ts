// import { Component, OnInit } from '@angular/core'
// import { ActivatedRoute, Router } from '@angular/router'
// import { StorageService } from '../../../../../core/service/storage.service'
// import { OrderService } from '../../services/order.service'
// import { HeaderComponent } from '../../../../../core/commons/components/header/header.component'
// import { ConfirmationService, MenuItem, MessageService } from 'primeng/api'
// import { DialogService } from 'primeng/dynamicdialog'
// import { NgxUiLoaderService } from 'ngx-ui-loader'

// @Component({
//   selector: 'app-success-form',
//   templateUrl: './success.component.html',
//   styleUrls: ['./success.component.scss', './scce.scss'],
//   providers: [
//     HeaderComponent,
//     DialogService,
//     ConfirmationService,
//     MessageService,
//   ],
// })
// export class SuccessComponent implements OnInit {
//   authToken!: string
//   token: string = ''

//   constructor(
//     private router: Router,
//     private route: ActivatedRoute,
//     private storageService: StorageService,
//     private orderService: OrderService,
//     private headerComponent: HeaderComponent,
//     private ngxService: NgxUiLoaderService,
//   ) {}

//   ngOnInit(): void {
//     // Verificar si la URL actual es la de éxito
//     if (window.location.pathname === '/payment/order-success') {
//       this.token = this.route.snapshot.queryParamMap.get('token') || ''

//       console.log('token------->', this.token)
//       if (this.token) {
//         this.updatePurchaseStatus(this.token)
//       }
//     }
//   }

//   updatePurchaseStatus(token: string): void {
//     this.ngxService.start()

//     this.orderService.updatePurchaseStatus(token).subscribe({
//       next: (response) => {
//         console.log('Estado de compra actualizado exitosamente:', response)
//         localStorage.removeItem('carrito')
//         localStorage.removeItem('purchaseData')

        
//         this.ngxService.stop()

//         // Retrasar la redirección por 3 segundos (3000 ms)
//         setTimeout(() => {
//           this.router.navigate(['/']).then(() => {
//             window.location.reload()
//           })
//         }, 4000) // Tiempo en milisegundos
//       },
//       error: (error) => {
//         console.error('Error al actualizar el estado de compra:', error)
//         this.ngxService.stop()
//         // Aquí puedes manejar el error, tal vez mostrando un mensaje de error al usuario
//       },
//     })
//   }
// }
