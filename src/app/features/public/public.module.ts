import { PublicCommonsModule } from './commons/commons.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { HomeView } from './view/home/home.view';
import { NotFoundView } from './view/not-found/not-found.view';

import { DetailView } from './view/detail/detail.view';

const VIEW___ = [DetailView,NotFoundView,HomeView]; // Agrega los componentes



@NgModule({
  declarations: [
    PublicComponent,
    ...VIEW___
  ],
  imports: [
    PublicCommonsModule,
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
