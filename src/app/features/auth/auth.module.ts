import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthCommonsModule } from './commons/commons.module';
import { AccesoUsuarioView } from './view/acceso-usuario/acceso-usuario.view';
import { AuthComponent } from './auth.component';
import { HttpClientModule } from '@angular/common/http';


const   VIEWS_ = [AccesoUsuarioView];
@NgModule({
  declarations: [...VIEWS_, AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AuthCommonsModule
  ],  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],

})
export class AuthModule { }
