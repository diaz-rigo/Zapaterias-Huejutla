import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { HomeView } from './view/home/home.view';
import { NotFoundView } from './view/not-found/not-found.view';
import { DetaillProductComponent } from './view/detaill-product/detaill-product.component';


@NgModule({
  declarations: [
    PublicComponent,
    HomeView,DetaillProductComponent,
    NotFoundView,
    DetaillProductComponent,

  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
