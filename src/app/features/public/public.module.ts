// import { AuthModule } from './../auth/auth.module';
// import { AccesoUsuarioView } from '../auth/acceso-usuario___/acceso-usuario.view';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ScrollTopModule } from 'primeng/scrolltop';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { AcercaEmpresaView } from './view/acerca-empresa/acerca-empresa.view';
import { CategoriaView } from './view/categoria/categoria.view';
import { DetailView } from './view/detail/detail.view';
import { HomeView } from './view/home/home.view';
import { NotFoundView } from './view/not-found/not-found.view';
import { PoliticasView } from './view/politicas/politicas.view';
import { RegistroUsuarioView } from './view/registro-usuario/registro-usuario.view';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { PublicCommonsModule } from './commons/commons.module';
import { MaterialModule } from './commons/material/material.module';
import { PasswordRecoveryComponent } from './view/password-recovery/password-recovery.component';
import { CartComponent } from './view/cart/cart.component';

const VIEW_COMPONENTS = [
  RegistroUsuarioView,
  DetailView,
  CategoriaView,
  NotFoundView,
  HomeView,
  PoliticasView,
  AcercaEmpresaView,
];

@NgModule({
  declarations: [
    PublicComponent,
    ...VIEW_COMPONENTS,
    PasswordRecoveryComponent,
    CartComponent,
  ],
  imports: [FormsModule, ReactiveFormsModule  ,
    CommonModule,
    RouterModule, ScrollTopModule,
    MaterialModule,
    PublicCommonsModule,
    PublicRoutingModule,
  ]
})
export class PublicModule { }
