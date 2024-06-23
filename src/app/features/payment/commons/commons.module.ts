import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PAYComponentsModule } from './components/components.module';
import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [],
  exports: [
    PAYComponentsModule,MaterialModule
  ]
})
export class paymentCommonsModule { }
