import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { adminComponentsModule } from './components/components.module';


@NgModule({
  exports: [

    adminComponentsModule
    // ...COMPONENTS
  ],
})
export class AdminCommonsModule { }
