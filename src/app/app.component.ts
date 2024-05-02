import { Component } from '@angular/core';
// import { ToastrService } from 'ngx-toastr'; // Importa el servicio ToastrService si estás usando Toastr para los toasts
import * as AOS from 'aos'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Zapaterias-Huejutla';

  // constructor(private toastr: ToastrService) { } // Inyecta el servicio ToastrService



  ngOnInit(): void {
    AOS.init()
    window.addEventListener('load', AOS.refresh)

    // Realizar la primera recarga solo si no se ha hecho antes
    // if (!this.initialReloadDone) {
    //   this.reloadPage();
    //   this.initialReloadDone = true;
    // }
  }
  // ngOnInit(): void {
  //   this.verificarConexion();
  // }

  // verificarConexion(): void {
  //   if (navigator.onLine) {
  //     this.mostrarToast('Estás conectado a Internet', 'success');
  //   } else {
  //     this.mostrarToast('Estás fuera de línea', 'error');
  //   }
  // }

  // mostrarToast(mensaje: string, tipo: string): void {
  //   this.toastr.show(mensaje, undefined , {
  //     closeButton: true,
  //     progressBar: true,
  //     timeOut: 3000, // Duración del toast en milisegundos
  //     positionClass: 'toast-top-right', // Posición del toast en la pantalla
  //     toastClass: `toast-${tipo}` // Clase de estilo para el toast según el tipo (success, error, etc.)
  //   });
  // }




}
