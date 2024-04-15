import { PublicCommonsModule } from './commons/commons.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { HomeView } from './view/home/home.view';
import { NotFoundView } from './view/not-found/not-found.view';
import { ButtonModule } from 'primeng/button';
import { DetailView } from './view/detail/detail.view';
// import { CategoriaMarcaComponent } from './view/categoria-marca/categoria-marca.component';
import {  CategoriaView } from './view/categoria/categoria.view';
import { RouterModule } from '@angular/router';
import { DetailImageComponent } from './commons/components/detail-image/detail-image.component';
import { DetailInfoComponent } from './commons/components/detail-info/detail-info.component';
// import { PoliticasComponent } from './view/politicas/politicas.component';
import { PoliticasView } from './view/politicas/politicas.view';
import { RegistroUsuarioView } from './view/registro-usuario/registro-usuario.view';
import { AcercaEmpresaView } from './view/acerca-empresa/acerca-empresa.view';
import { TimelineModule } from 'primeng/timeline';
const VIEW___ = [RegistroUsuarioView,DetailView,CategoriaView,NotFoundView,HomeView]; // Agrega los componentes

import { CardModule } from 'primeng/card';
import { AccesoUsuarioView } from './view/acceso-usuario/acceso-usuario.view';

@NgModule({
  declarations: [

  
    PublicComponent,
    VIEW___,
    PoliticasView,
    AcercaEmpresaView,
    AccesoUsuarioView,
    
  ],
  imports: [CardModule,
    PublicCommonsModule, TimelineModule,
    CommonModule,CarouselModule,
    PublicRoutingModule, ButtonModule,
  ]
})
export class PublicModule { }
