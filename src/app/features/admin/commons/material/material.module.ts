import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ButtonModule } from 'primeng/button'
import { CardModule } from 'primeng/card'
import { CarouselModule } from 'primeng/carousel'
import { TimelineModule } from 'primeng/timeline'
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { ChartModule } from 'primeng/chart';
import { DialogModule } from 'primeng/dialog';
import { TagModule } from 'primeng/tag';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { BadgeModule } from 'primeng/badge';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
const PRIME_COMPONENTS = [
  ConfirmDialogModule,
  BadgeModule,
  ToastModule,
  FileUploadModule,
  TableModule,
  InputTextModule,
  InputTextareaModule,
  DropdownModule,
  InputNumberModule,
  CarouselModule,
  TimelineModule,
  ButtonModule,
  CardModule,
  ChartModule,
  DialogModule,
  TagModule
]

@NgModule({
  imports: [...PRIME_COMPONENTS],
  exports: [...PRIME_COMPONENTS],
})
export class MaterialModule {}
