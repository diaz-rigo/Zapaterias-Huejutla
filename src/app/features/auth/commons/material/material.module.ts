import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNG
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputOtpModule } from 'primeng/inputotp';
import { InputTextModule } from 'primeng/inputtext';
import { KnobModule } from 'primeng/knob';
import { MessagesModule } from 'primeng/messages';
import { PasswordModule } from 'primeng/password';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { StepsModule } from 'primeng/steps';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';

const MATERIALS__ = [
  BreadcrumbModule,
  CalendarModule,
  CheckboxModule,
  ConfirmPopupModule,
  DialogModule,
  DropdownModule,
  InputMaskModule,
  InputOtpModule,
  InputTextModule,
  KnobModule,
  MessagesModule,
  PasswordModule,
  ProgressSpinnerModule,
  StepsModule,
  TabViewModule,
  ToastModule
];


@NgModule({

exports: [ ...MATERIALS__],
imports: [...MATERIALS__],
})
export class MaterialModule { }
