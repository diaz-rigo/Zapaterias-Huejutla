import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';




const MATERIALS__ = [AnimateOnScrollModule]; // Agrega los componentes

@NgModule({
  declarations: [],
  imports: [
    ...MATERIALS__,
    CommonModule
  ]
})
export class MaterialModule { }
