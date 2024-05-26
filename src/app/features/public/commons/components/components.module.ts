import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailImageComponent } from './detail-image/detail-image.component';
import { DetailInfoComponent } from './detail-info/detail-info.component';
import { CategoriaListaComponent } from './categoria-lista/categoria-lista.component';
import { CategoriaDetalleComponent } from './categoria-detalle/categoria-detalle.component';
import { CategoriaMarcaCarrucelComponent } from './categoria-marca-carrucel/categoria-marca-carrucel.component';
import { CategoriaMarcaListProductsComponent } from './categoria-marca-list-products/categoria-marca-list-products.component';
import { CategoriaMarcaComponent } from './categoria-marca/categoria-marca.component';
import { MaterialModule } from '../material/material.module';
import { HomeContentComponent } from './home-content/home-content.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarritoFloatComponent } from './carrito-float/carrito-float.component';

const COMPONENTES = [
  HomeContentComponent,
  DetailImageComponent,
  CategoriaMarcaComponent,
  CategoriaMarcaListProductsComponent,
  CategoriaMarcaCarrucelComponent,
  CategoriaDetalleComponent,
  CategoriaListaComponent,
  CarritoFloatComponent,
  DetailInfoComponent,
];

@NgModule({
  declarations: [...COMPONENTES],
  exports: [...COMPONENTES],
  imports: [CommonModule,MaterialModule,ReactiveFormsModule,FormsModule],
})
export class PublicComponentsModule {}
