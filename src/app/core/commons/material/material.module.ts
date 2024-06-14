import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BadgeModule } from 'primeng/badge'
import { MenubarModule } from 'primeng/menubar'
import { SidebarModule } from 'primeng/sidebar'
import { AnimateOnScrollModule } from 'primeng/animateonscroll'
import { TreeModule } from 'primeng/tree'
import { TagModule } from 'primeng/tag'
import { DialogModule } from 'primeng/dialog'
import { ButtonModule } from 'primeng/button'
import { ToastModule } from 'primeng/toast'
import { ConfirmDialogModule } from 'primeng/confirmdialog'
import { ConfirmPopupModule } from 'primeng/confirmpopup'
import { DividerModule } from 'primeng/divider';
const MATERIALS__ = [
  DividerModule,
  ConfirmPopupModule,
  ConfirmDialogModule,
  ToastModule,
  ButtonModule,
  DialogModule,
  TagModule,
  TreeModule,
  MenubarModule,
  SidebarModule,
  AnimateOnScrollModule,
  BadgeModule,
] // Agrega los componentes

@NgModule({
  declarations: [],
  imports: [...MATERIALS__],
  exports: [...MATERIALS__],
})
export class MaterialModule {}
