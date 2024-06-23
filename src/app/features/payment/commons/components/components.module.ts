import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessComponent } from './success/success.component';
import { OrderComponent } from './order/order.component';
import { ReactiveFormsModule } from '@angular/forms';
const COMPONENTES = [SuccessComponent,OrderComponent];

@NgModule({
  declarations: [...COMPONENTES],
  exports: [...COMPONENTES],
  imports: [CommonModule,ReactiveFormsModule],
})
export class PAYComponentsModule {}
