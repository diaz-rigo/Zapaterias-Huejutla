import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment.component';
import { OrderDetailView } from './views/order-detail/order-detail.view';
import { OrderviewView } from './views/orderview/orderview.view';
import { paysuccess } from './views/pay-success/pay-success.view';
import { CoreComponentsModule } from '../../core/commons/components/components.module';
import { RouterModule } from '@angular/router';
import { paymentCommonsModule } from './commons/commons.module';
import { ReactiveFormsModule } from '@angular/forms';

const VIEW___ = [OrderDetailView, OrderviewView, paysuccess];

@NgModule({
  declarations: [...VIEW___, PaymentComponent],
  imports: [
    CommonModule,
    PaymentRoutingModule,ReactiveFormsModule,
    RouterModule,paymentCommonsModule
  ],
})
export class PaymentModule {}
