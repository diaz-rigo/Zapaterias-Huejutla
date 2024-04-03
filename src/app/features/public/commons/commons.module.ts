import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponentsModule } from './components/components.module';



@NgModule({
  declarations: [],
  exports:[
    CommonModule,
    PublicComponentsModule,
  ]
})
export class PublicCommonsModule { }
