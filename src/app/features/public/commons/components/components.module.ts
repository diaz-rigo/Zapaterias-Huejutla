import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailImageComponent } from './detail-image/detail-image.component';
import { DetailInfoComponent } from './detail-info/detail-info.component';

const COMPONENTS___ = [DetailImageComponent, DetailInfoComponent]; // Agrega los componentes

@NgModule({
  declarations: [...COMPONENTS___],
  exports: [...COMPONENTS___],
  imports: [CommonModule],
})
export class PublicComponentsModule {}
