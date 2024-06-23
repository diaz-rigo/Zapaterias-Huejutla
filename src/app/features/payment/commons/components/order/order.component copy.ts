// import { Component } from '@angular/core';

// interface PasteleriaFlavor {
//   name: string;
//   code: string;
//   precioPorKilo: number; // Agrega el precio por kilo para cada sabor
// }

// @Component({
//   selector: 'app-order',
//   templateUrl: './order.component.html',
//   styleUrls: ['./order.component.scss'],
// })
// export class OrderComponent {
//   flavors: PasteleriaFlavor[] | undefined;
//   instrucion: string = '';
//   selectedFlavor: PasteleriaFlavor | undefined;
//   selectedQuantity: number | undefined; // Variable para la cantidad seleccionada
//   precioTotal: number | undefined; // Variable para el precio total
//   personasPorKilo: number | undefined; // Variable para la cantidad de personas por kilo
//   modoOptions: string[] = ['cuadrado', 'redondo', 'corazon', 'otro']; // Opciones de modo de repostería
//   selectedModo: string | undefined; // Variable para el modo seleccionado
//   modoPersonalizado: string | undefined; // Variable para el modo personalizado


//   selectedModosabor: string = ''; // Variable para almacenar el modo seleccionado
//   saborpersonalizado: string = ''; // Variable para almacenar las instrucciones especiales

//   ngOnInit() {
//     this.flavors = [
//       { name: 'Chocolate', code: 'choco', precioPorKilo: 25 }, // Define el precio por kilo para cada sabor
//       { name: 'Vainilla', code: 'vani', precioPorKilo: 30 },
//       { name: 'Fresa', code: 'fres', precioPorKilo: 20 },
//       { name: 'Limón', code: 'lim', precioPorKilo: 35 },
//       { name: 'Naranja', code: 'nara', precioPorKilo: 40 },
//     ];
//     this.selectedModo = undefined; // Inicializar el modo seleccionado
//     this.modoPersonalizado = undefined; // Inicializar el modo personalizado
//   }

//   kilosOptions: number[] = [1, 2, 3, 4, 5]; // Opciones de cantidad en kilos

//   calcularPrecio(): void {
//     if (this.selectedFlavor && this.selectedQuantity) {
//       this.precioTotal =
//         this.selectedFlavor.precioPorKilo * this.selectedQuantity;
//     } else {
//       this.precioTotal = undefined;
//     }
//   }

//   calcularPersonas(): void {
//     if (this.selectedQuantity) {
//       this.personasPorKilo = this.selectedQuantity * 25;
//     } else {
//       this.personasPorKilo = undefined;
//     }
//   }

//   modoChanged(): void {
//     if (this.selectedModo !== 'otro') {
//       this.modoPersonalizado = undefined;
//     }
//   }


// }
