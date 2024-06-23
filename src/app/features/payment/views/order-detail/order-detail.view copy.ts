// import {
//   ChangeDetectorRef,
//   Component,
//   Input,
//   OnInit,
//   ViewEncapsulation,
// } from '@angular/core';
// import {
//   FormBuilder,
//   FormControl,
//   FormGroup,
//   Validators,
// } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// // import {  MessageService, confirmationService } from 'primeng/api';
// import { CartService } from 'src/app/core/services/cart.service';
// import { CompraService } from 'src/app/core/services/compra.service';
// import { StorageService } from 'src/app/core/services/storage.service';
// import { Product } from 'src/app/features/admin/models/Product.models';
// import { CartItem } from 'src/app/shared/models/cart.model';
// import { NzCascaderOption } from 'ng-zorro-antd/cascader';
// import {
//   ConfirmationService,
//   MessageService,
//   ConfirmEventType,
//   MenuItem,
// } from 'primeng/api';
// import { StripeService } from '../../commons/services/stripe.service';
// import { PaypalService } from '../../commons/services/paypal.service';
// import { MercadoPagoService } from '../../commons/services/mercado-pago.service';
// import { HttpClient } from '@angular/common/http';

// interface City {
//   name: string;
//   code: string;
// }
// interface Link {
//   href: string;
//   rel: string;
// }

// @Component({
//   selector: 'app-order-detail',
//   templateUrl: './order-detail.view.html',
//   styleUrls: ['./order-detail.view.scss', './totalbtn.scss'],
//   encapsulation: ViewEncapsulation.None,
//   providers: [ConfirmationService, MessageService],
// })
// export class OrderDetailView implements OnInit {
//   date: Date[] | undefined;
//   token: string = '';

//   dateselect: Date[] | undefined;
//   activeIndex: number = 0;
//   i: number = 0;
//   municipios: City[] | undefined;
//   localidades: City[] | undefined;

//   selectedCity: City | undefined;
//   selectedLocal: City | undefined;

//   selectedDate: Date | undefined;
//   items: MenuItem[] | undefined;
//   items2: MenuItem[] | undefined;

//   home: MenuItem | undefined;
//   stateOptions: any[] = [
//     {
//       label: 'Avenida Profr. Toribio Reyes 5, Huejutla, Hidalgo, Mexico',
//       value: 'on',
//     },
//   ];
//   value: string = 'off';
//   instrucion: string = '';

//   showInStoreAccordion = false;
//   showShippingAccordion = false;

//   @Input() carData: CartItem[] = [];
//   totalAmount: number = 0;
//   @Input() product!: Product;

//   paymentForm: FormGroup;
//   cantidadpro: number = 0;
//   calendarioAv = false;
//   formviww = true;
//   // inputsDisable = false;
//   inputsDisable: boolean = false; // o false dependiendo de tu lógica

//   // createForm: FormGroup;
//   municipio: any[] | undefined;
//   // breadcrumbItems = [
//   //   { label: 'Inicio', url: '#' },
//   //   { label: 'sign-up', url: '/signup' },
//   // ];
//   // selectedCity: any;

//   // constructor(private purchaseDataService: PurchaseDataService) { }
//   values: string[] | null = null;

//   onChanges(values: string[]): void {
//     console.log(values, this.values);
//   }
//   position: string = 'center';

//   // constructor(private confirmationService: confirmationService, private messageService: MessageService) {}
//   // constructor(private http: HttpClient) {}

//   constructor(
//     private http: HttpClient,
//     private compraService: CompraService,
//     private route: ActivatedRoute,
//     private router: Router,
//     private cdr: ChangeDetectorRef,
//     private cartService: CartService,
//     private confirmationService: ConfirmationService,
//     private messageService: MessageService,
//     private carritoService: StorageService,
//     private stripeService: StripeService,
//     private paypalService: PaypalService,
//     private mercadoPagoService: MercadoPagoService,
//     private formBuilder: FormBuilder
//   ) {
//     this.paymentForm = this.formBuilder.group({
//       name: ['', Validators.required],
//       maternalLastname: ['', Validators.required],
//       paternalLastname: ['', Validators.required],
//       phone: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//     });

//     // Obtén los datos del formulario del almacenamiento
//     const formDataFromStorage = this.getFormDataFromStorage();

//     // Si se encontraron datos en el almacenamiento, asigna los valores al formulario
//     if (formDataFromStorage) {
//       this.paymentForm.patchValue(formDataFromStorage);
//     } else {
//       // Si no se encontraron datos en el almacenamiento, asigna los valores predeterminados
//       this.paymentForm.patchValue({
//         totalAmount: this.calculateTotalAmount(), // Asigna el valor del monto total
//         date: this.getDateFromStorage(), // Asigna el valor de la fecha
//       });
//     }
//     const carDataFromStorage = this.carritoService.getCarrito();

//     if (carDataFromStorage) {
//       this.carData = carDataFromStorage;
//     }
//     this.getTotalAmount();

//     // Aquí puedes asignar los valores adicionales al formulario paymentForm
//   }

//   ngOnInit(): void {
//     this.items = [{ label: 'Carrito', routerLink: '/payment/order-detail' }];
//     this.items2 = [
//       { label: 'Carrito', routerLink: '/payment/order-detail' },
//       {
//         label: 'verficacion',
//         command: () => {
//           this.activeIndex = 0;
//         },
//       },
//       { icon: 'pi pi-money-bill' },
//     ];

//     this.home = { icon: 'pi pi-home', routerLink: '/' };

//     this.municipios = [
//       { name: 'HUEJUTLA', code: 'HU' },
//       { name: 'JALTOCAN', code: 'JAL' },
//       { name: 'ATLAPEXCO', code: 'ATLA' },
//     ];
//     this.localidades = [
//       { name: 'Parque del poblamiento', code: 'HU' },
//       { name: 'tecoluco', code: 'JAL' },
//     ];

//     this.cartService.totalPrice$.subscribe((totalPrice) => {
//       this.totalAmount = totalPrice;
//     });
//   }
//   getDateFromStorage(): Date | null {
//     // Obtener la fecha del almacenamiento
//     const dateString = localStorage.getItem('date');

//     // Verificar si se encontró una fecha en el almacenamiento
//     if (dateString) {
//       // Convertir la cadena de fecha almacenada a un objeto Date
//       const date = new Date(dateString);

//       // Verificar si la fecha es válida
//       if (!isNaN(date.getTime())) {
//         // Devolver la fecha
//         return date;
//       }
//     }

//     return null;
//   }

//   getFormDataFromStorage() {
//     const formData = localStorage.getItem('formData');
//     if (formData) {
//       return JSON.parse(formData);
//     }
//     return null;
//   }

//   submitForm2() {
//     if (this.paymentForm.valid) {
//       this.messageService.add({
//         severity: 'info',
//         summary: 'Confirmed',
//         detail: 'Datos obtenidos',
//       });
//     }
//     if (this.paymentForm.valid) {
//       const formData = this.paymentForm.value;
//       this.inputsDisable = true;
//       this.formviww = false;
//       // console.log(this.inputsDisable);
//       const purchaseData = {
//         totalneto: this.getTotalNetoValue(),
//         tipoEntrega: this.getDeliveryOptionLabel(),
//         dateselect: this.dateselect,
//         productos: this.carData,
//         datoscliente: formData,
//         instrucion: this.instrucion,
//         success_url: 'https://austins.vercel.app/payment/order-success',
//       };
//       // console.log(purchaseData);
//       this.compraService.savePurchaseData(purchaseData);

//       this.activeIndex = 1;

//       this.router.navigate(['/payment/order-detail'], {
//         queryParams: {
//           deliveryOption: this.deliveryOption,
//         },
//       });
//     } else {
//       this.messageService.add({
//         severity: 'error',
//         summary: 'Eliminado',
//         detail:
//           'El formulario no es válido. Por favor, complete los campos requeridos correctamente.',
//         life: 3000,
//       });
//       // El formulario es inválido, puedes mostrar mensajes de error o realizar otras acciones.
//     }
//   }
//   selectPaymentMethod(paymentMethod: string): void {
//     const purchaseDataString = localStorage.getItem('purchaseData');
//     // console.log(purchaseDataString);

//     if (purchaseDataString) {
//       const purchaseData = JSON.parse(purchaseDataString);

//       switch (paymentMethod) {
//         case 'tarjeta':
//           // Llamar al servicio específico para el pago con tarjeta
//           this.stripeService.createCheckoutSession(purchaseData).subscribe(
//             (response) => {
//               console.log(
//                 'Respuesta del servidor (pago con tarjeta):',
//                 response
//               );
//               // Redireccionar a la URL de pago proporcionada por Stripe
//               window.location.href = response.url;
//             },
//             (error) => {
//               console.error('Error en el pago con tarjeta:', error);
//             }
//           );
//           break;
//         case 'paypal':
//           // Llamar al servicio específico para el pago con PayPal
//           this.paypalService.createPayment(purchaseData).subscribe(
//             (response) => {
//               console.log(
//                 'Respuesta del servidor (pago con PayPal):',
//                 response
//               );

//               // Redireccionar a la URL de aprobación proporcionada por PayPal
//               const approvalLink = response.data.links.find(
//                 (link: Link) => link.rel === 'approve'
//               )?.href;
//               if (approvalLink) {
//                 window.location.href = approvalLink; // Redirigir al usuario a PayPal para completar el pago
//               } else {
//                 console.error(
//                   'No se encontró el enlace de aprobación en la respuesta del servidor.'
//                 );
//               }
//             },
//             (error) => {
//               console.error('Error en el pago con PayPal:', error);
//             }
//           );
//           break;

//         case 'mercado':
//           this.mercadoPagoService.createOrder(purchaseData).subscribe(
//             (response) => {
//               console.log(
//                 'Respuesta del servidor (pago con MercadoPago):',
//                 response
//               );
//               if (response && response.url) {
//                 window.location.href = response.url;
//               } else {
//                 console.error(
//                   'URL de redirección no encontrada en la respuesta del servidor.'
//                 );
//                 // Manejar la ausencia de URL de redirección (por ejemplo, mostrar un mensaje de error)
//               }
//             },
//             (error) => {
//               console.error('Error en el pago con MercadoPago:', error);
//               // Manejar el error (por ejemplo, mostrar un mensaje de error)
//             }
//           );
//           break;
//         default:
//           console.error('Método de pago no válido:', paymentMethod);
//           break;
//       }
//     } else {
//       console.error('No se encontraron datos de compra en el localStorage.');
//     }
//   }

//   calculateTotalAmount(): number {
//     const deliveryOption = this.getDeliveryOptionLabel();
//     let totalAmount = this.getTotalAmount();
//     if (deliveryOption === 'Envío') {
//       totalAmount += 200;
//     }
//     return totalAmount;
//   }
//   formatDate(date: Date): string {
//     if (!date) return 'N/A';

//     // Formatea la fecha como una cadena legible
//     const options: Intl.DateTimeFormatOptions = {
//       weekday: 'short',
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric',
//       hour: '2-digit',
//       minute: '2-digit',
//       second: '2-digit',
//       timeZoneName: 'short',
//     };
//     return date.toLocaleString('es-ES', options);
//   }

//   setDateToAllFields(date: Date): void {
//     const dateInputs = document.querySelectorAll('input[type="date"]');
//     dateInputs.forEach((input: any) => {
//       input.value = this.formatDate(date);
//     });
//   }
//   // Dentro de tu componente OrderDetailView
//   getDeliveryOptionLabel(): string {
//     return this.deliveryOption === 'shipping' ? 'Envío' : 'En tienda';
//   }

//   getTotalNetoValue(): string {
//     const totalAmount = this.getTotalAmount();
//     if (this.getDeliveryOptionLabel() === 'Envío') {
//       return (totalAmount + 200).toFixed(2);
//     } else {
//       return totalAmount.toFixed(2);
//     }
//   }
//   // Función auxiliar para marcar todos los campos del formulario como "touched"
//   markFormGroupTouched(formGroup: FormGroup) {
//     Object.values(formGroup.controls).forEach((control) => {
//       control.markAsTouched();

//       if (control instanceof FormGroup) {
//         this.markFormGroupTouched(control);
//       }
//     });
//   }

//   get cartItem(): CartItem {
//     return this.setCartItem();
//   }

//   setCartItem(): CartItem {
//     const cartItem: CartItem = {
//       id: this.product._id,
//       name: this.product.name,
//       precio: this.product.price,
//       cantidad: 1,
//       image: this.product.images,
//     };
//     return cartItem;
//   }

//   getTotalAmount(): number {
//     return this.carData.reduce(
//       (total, item) => total + item.precio * item.cantidad,
//       0
//     );
//   }

//   deliveryOption: string = 'inStore';
//   activeAccordionIndex: number = 0;

//   toggleAccordion(option: string): void {
//     if (option === 'inStore') {
//       this.activeAccordionIndex = 0;
//     } else if (option === 'shipping') {
//       this.activeAccordionIndex = 1;
//     }
//   }

//   confirm2(event: Event, item: CartItem) {
//     this.confirmationService.confirm({
//       target: event.target as EventTarget,
//       message: '¿Estás seguro de que quieres eliminar este elemento?',
//       icon: 'pi pi-info-circle',
//       acceptButtonStyleClass: 'p-button-danger p-button-sm',
//       accept: () => {
//         this.messageService.add({
//           severity: 'error',
//           summary: 'Eliminado',
//           detail: `El producto "${item.name}" ha sido eliminado del carrito`,
//           life: 3000,
//         });
//         this.removeItem(item);
//       },
//       reject: () => {},
//     });
//   }

//   removeItem(item: CartItem): void {
//     this.carData = this.carData.slice();
//     // console.log(this.carData.length)

//     const index = this.carData.indexOf(item);
//     if (index !== -1) {
//       this.carData.splice(index, 1);
//     }
//     this.carData = this.carData.slice();

//     console.log(this.carData.length==0)
//     if(this.carData.length==0){

//         this.router.navigate(['/portal/home']); // Utiliza la navegación de Angular


//     }
//     this.cartService.remove(item);

//     this.cdr.detectChanges();
//   }

//   incrementQuantity(item: CartItem): void {
//     this.cartService.add(item);

//     item.cantidad++;

//     const totalKilos = this.carData.reduce(
//       (total, item) => total + item.cantidad,
//       0
//     );
//     if (totalKilos > 4) {
//       this.calendarioAv = false;
//     }
//     // console.log(totalKilos)
//   }

//   decrementQuantity(item: CartItem): void {
//     if (item.cantidad > 1) {
//       item.cantidad--;
//       const totalKilos = this.carData.reduce(
//         (total, item) => total + item.cantidad,
//         0
//       );
//       if (totalKilos < 4) {
//         this.calendarioAv = true;
//       }
//       // console.log(totalKilos)
//     }

//     this.cartService.decre(item);
//   }

//   redirectTo(route: string): void {
//     this.router.navigate(['/portal', route]);
//   }

//   continueToPayment() {
//     // Calcular la cantidad total de kilos de todos los productos en carData
//     const totalKilos = this.carData.reduce(
//       (total, item) => total + item.cantidad,
//       0
//     );

//     // console.log(this.deliveryOption, totalKilos);
//     if (this.deliveryOption === 'shipping' && totalKilos < 4) {
//       this.calendarioAv = true;
//       this.messageService.add({
//         severity: 'error',
//         summary: 'Error',
//         detail: 'Para el envío, la cantidad de kilos debe ser mayor a 4.',
//       });
//       this.activeIndex = 0;
//       this.router.navigate(['/payment/order-detail'], {
//         queryParams: {
//           deliveryOption: this.deliveryOption,
//           // Usar 'N/A' si no hay fecha formateada
//         },
//       });
//       return; // No necesitas el return aquí si deseas continuar con la lógica después de la validación.
//     }

//     // console.log(this.date, totalKilos);
//     // console.log(!this.deliveryOption || !this.date || this.date.length === 0);
//     if (!this.deliveryOption || !this.date || this.date.length === 0) {
//       this.calendarioAv = false;
//       this.messageService.add({
//         severity: 'error',
//         summary: 'Error',
//         detail: 'Falta seleccionar la fecha.',
//       });
//       return;
//     }
//     this.dateselect = this.date;

//     if (this.dateselect && this.dateselect.length > 0) {
//       const selectedDate = this.dateselect[0];
//       this.setDateToAllFields(selectedDate);
//     }
//     // const purchaseData = {
//     //   totalneto:this.getTotalNetoValue(),
//     //   tipoEntrega:this.getDeliveryOptionLabel(),
//     //   dateselect: this.dateselect,
//     // };
//     // this.compraService.savePurchaseData(purchaseData);

//     // if (totalKilos > 4 && this.deliveryOption != 'shipping') {
//     this.activeIndex = 1;
//     this.router.navigate(['/payment/order-detail'], {
//       queryParams: {
//         deliveryOption: this.deliveryOption,
//         // Usar 'N/A' si no hay fecha formateada
//       },
//     });
//     // }
//   }

//   confirm3() {
//     this.position = 'bottom';
//     this.confirmationService.confirm({
//       message: 'Deseas Confirmar tus datos ?',
//       header: 'Confirmacion',
//       icon: 'pi pi-info-circle',
//       acceptIcon: 'none',
//       rejectIcon: 'none',
//       rejectButtonStyleClass: 'p-button-text',
//       accept: () => {
//         this.submitForm2();
//         // this.inputsDisable = true;
//       },
//       reject: () => {
//         this.messageService.add({
//           severity: 'error',
//           summary: 'Rejected',
//           detail: 'Process incomplete',
//           life: 3000,
//         });
//       },
//       key: 'positionDialog',
//     });
//   }

//   validateEmail() {
//     if (this.paymentForm !== null && this.paymentForm !== undefined) {
//       const emailControl = this.paymentForm.get('email');
//       if (emailControl) {
//         const email = emailControl.value;

//         // Realizar solicitud a la API para validar el correo electrónico
//         this.http
//           .get<any>(`https://www.disify.com/api/email/${email}`)
//           .subscribe(
//             (response) => {
//               // Manejar la respuesta de la API aquí
//               // console.log(response);
//               if (response.format) {
//                 console.log('El formato del correo electrónico es válido.');

//                 // Aquí podrías realizar acciones adicionales si el formato es válido
//               } else {
//                 console.error(
//                   'El formato del correo electrónico no es válido.'
//                 );

//                 // Aquí podrías mostrar un mensaje de error al usuario indicando que el formato del correo electrónico no es válido
//               }

//             },
//             (error) => {
//               // Manejar errores aquí
//               console.error(error);
//             }
//           );
//       }
//     }
//   }


//   phoneError: string = '';

//   validatePhone(phoneNumber: string) {
//     const apiKey = 'f82282dadb9445308e545d1e1adf52c7';
//     const apiUrl = `https://phonevalidation.abstractapi.com/v1/?api_key=${apiKey}&phone=${phoneNumber}`;

//     this.http.get<any>(apiUrl).subscribe(
//       (response) => {
//         if (!response.valid) {
//           this.phoneError = 'El número de teléfono es inválido.';
//         } else {
//           this.phoneError = ''; // Reiniciar el mensaje de error si el número de teléfono es válido
//         }
//       },
//       (error) => {
//         // Manejar errores aquí
//         console.error('Error al validar el número de teléfono:', error);
//       }
//     );
//   }

// }
