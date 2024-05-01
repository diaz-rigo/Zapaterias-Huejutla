import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { CoreComponentsModule } from './components/components.module';

@NgModule({
  exports: [

    CoreComponentsModule
    // ...COMPONENTS
  ],
})
export class CoreCommonsModule {}
