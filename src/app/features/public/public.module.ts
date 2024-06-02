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
import { BackButtonDirective } from './view/detail/back-button.directive';
import { ProductosView } from './view/productos/productos.view';
import { SearchResultsView } from './view/search-results/search-results.view';
import { HeaderCategoriaComponent } from '../../core/commons/components/header-categoria/header-categoria.component';
import { ResultProductComponent } from './commons/components/result-product/result-product.component';
import { CoreCommonsModule } from '../../core/commons/commons.module';
import { CoreComponentsModule } from '../../core/commons/components/components.module';
import { CoreModule } from '../../core/core.module';



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
    PublicComponent,HeaderCategoriaComponent,
    ...VIEW_COMPONENTS,
    PasswordRecoveryComponent,
    CartComponent,
    BackButtonDirective,
    ProductosView,
    SearchResultsView
  ],
  imports: [FormsModule, ReactiveFormsModule  ,

    RouterModule, ScrollTopModule,
    MaterialModule,
    PublicCommonsModule,
    PublicRoutingModule,CommonModule
 ]
})
export class PublicModule { }
