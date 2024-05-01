import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeModule } from 'primeng/badge';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

const MATERIALS__ = [MenubarModule,SidebarModule,AnimateOnScrollModule,BadgeModule]; // Agrega los componentes

@NgModule({
  declarations: [],
  imports: [
    ...MATERIALS__,
  ],exports: [
    ...MATERIALS__,
  ]
})
export class MaterialModule { }
