import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const COMPONENTS = [HeaderComponent,FooterComponent]; // Agrega los componentes

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [CommonModule],
  providers: [],
})
export class CoreComponentsModule {}
