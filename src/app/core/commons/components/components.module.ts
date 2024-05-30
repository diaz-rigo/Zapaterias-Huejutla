import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../material/material.module';
// import { HeaderCategoriaComponent } from './header-categoria/header-categoria.component';
const COMPONENTS = [HeaderComponent, FooterComponent]; // Agrega los componentes

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS,BrowserAnimationsModule, ],
  imports: [CommonModule, BrowserAnimationsModule,MaterialModule],
  providers: [],
})
export class CoreComponentsModule {}
