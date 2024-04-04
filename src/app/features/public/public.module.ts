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

const VIEW___ = [DetailView,NotFoundView,HomeView]; // Agrega los componentes



@NgModule({
  declarations: [
    PublicComponent, 
    ...VIEW___
  ],
  imports: [
    PublicCommonsModule,
    CommonModule,CarouselModule,
    PublicRoutingModule, ButtonModule
  ]
})
export class PublicModule { }
