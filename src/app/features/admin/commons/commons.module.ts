import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { adminComponentsModule } from './components/components.module';
import { DefaultImgModule } from '../../../shared/pipes/default-img/default-img.module';


// @NgModule({
//   declarations: [],
//   exports:[AdminComponentModule,ADMINServicesModule,MaterialModule,DefaultImgModule],

// })
@NgModule({
  exports: [

    DefaultImgModule
    // ...COMPONENTS
  ],
})
export class AdminCommonsModule { }
