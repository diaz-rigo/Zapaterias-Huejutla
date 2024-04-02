import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { HomeView } from './view/home/home.view';
import { NotFoundView } from './view/not-found/not-found.view';


@NgModule({
  declarations: [
    PublicComponent,
    HomeView,
    NotFoundView,

  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
