import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { StepsModule } from 'primeng/steps';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
import { KnobModule } from 'primeng/knob';
import { DividerModule } from 'primeng/divider';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TooltipModule } from 'primeng/tooltip';
import { ColorPickerModule } from 'primeng/colorpicker';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { TableModule } from 'primeng/table';
import { AccordionModule } from 'primeng/accordion';

const PRIMENG_MODULES = [
  ToastModule,
  StepsModule,
  BreadcrumbModule,
  InputTextModule,
  CalendarModule,
  DropdownModule,
  InputMaskModule,
  CheckboxModule,
  PasswordModule,
  KnobModule,
  DividerModule,
  RadioButtonModule,
  InputTextareaModule,
  TooltipModule,
  ColorPickerModule,
  FileUploadModule,
  ButtonModule,
  CardModule,
  TabViewModule,
  SelectButtonModule,
  ConfirmDialogModule,
  ConfirmPopupModule,
  TableModule,
  AccordionModule,
];

const COMMON_MODULES = [
  CommonModule,
  FormsModule,
  DatePipe,
];

@NgModule({
  imports: [
    ...COMMON_MODULES,
    ...PRIMENG_MODULES,
  ],
  exports: [
    ...COMMON_MODULES,
    ...PRIMENG_MODULES,
  ],
})
export class MaterialModule {}
