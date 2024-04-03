import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { BadgeModule } from 'primeng/badge';
const COMPONENTS = [HeaderComponent, FooterComponent]; // Agrega los componentes

const MATERIALS__ = [AnimateOnScrollModule,BadgeModule]; // Agrega los componentes

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS, ...MATERIALS__],
  imports: [CommonModule, ...MATERIALS__],
  providers: [],
})
export class CoreComponentsModule {}
