import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponentsModule } from './components/components.module';
import { MaterialModule } from './material/material.module';
import { AuthServicesModule } from './services/services.module';



@NgModule({
  declarations: [

  ],
  exports:[
    AuthComponentsModule,
    AuthServicesModule,
    MaterialModule
  ],

})
export class AuthCommonsModule { }
