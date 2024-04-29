import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  private activeRequests = 0;

  constructor(private ngxService: NgxUiLoaderService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // console.log(request);
    if (this.activeRequests === 0) {
      this.ngxService.start(); // Inicia el spinner solo si no hay solicitudes activas
    }
    this.activeRequests++; // Incrementa el contador de solicitudes activas

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => this.handleErrors(error)),
      finalize(() => this.stopLoader()) // Detiene el spinner cuando se completa la solicitud (éxito o error)
    );
  }

  private handleErrors(error: HttpErrorResponse): Observable<never> {
    if (error.status === 404 && !this.router.url.includes('/portal/not-found')) {
      console.log('Error 404 interceptado!!');
      // this.router.navigateByUrl('portal/not-found');
    } else if (error.status === 403) {
      // Agregar lógica para el código de estado 403 si es necesario
    }
    else if (error.status === 409) {
      console.log("error ",error )
      // Agregar lógica para el código de estado 403 si es necesario
    }
    return throwError(error);
  }

  private stopLoader() {
    this.activeRequests--; // Decrementa el contador de solicitudes activas
    if (this.activeRequests === 0) {
      this.ngxService.stop(); // Detiene el spinner cuando no hay más solicitudes activas
    }
  }
}
