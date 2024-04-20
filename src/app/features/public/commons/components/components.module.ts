import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailImageComponent } from './detail-image/detail-image.component';
import { DetailInfoComponent } from './detail-info/detail-info.component';
import { CategoriaListaComponent } from './categoria-lista/categoria-lista.component';
import { CategoriaDetalleComponent } from './categoria-detalle/categoria-detalle.component';
import { CategoriaMarcaCarrucelComponent } from './categoria-marca-carrucel/categoria-marca-carrucel.component';
import { CategoriaMarcaListProductsComponent } from './categoria-marca-list-products/categoria-marca-list-products.component';

const COMPONENTS___ = [CategoriaDetalleComponent,CategoriaListaComponent,DetailImageComponent, DetailInfoComponent]; // Agrega los componentes

@NgModule({
  declarations: [ COMPONENTS___, CategoriaMarcaCarrucelComponent, CategoriaMarcaListProductsComponent],
  exports: [COMPONENTS___],
  imports: [CommonModule],
})
export class PublicComponentsModule {}
