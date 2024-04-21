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

const COMPONENTES = [

  DetailImageComponent,
  CategoriaMarcaComponent,
  CategoriaMarcaListProductsComponent,
  CategoriaMarcaCarrucelComponent,
  CategoriaDetalleComponent,
  CategoriaListaComponent,

  DetailInfoComponent,
];

@NgModule({
  declarations: [...COMPONENTES],
  exports: [...COMPONENTES],
  imports: [CommonModule,MaterialModule],
})
export class PublicComponentsModule {}
