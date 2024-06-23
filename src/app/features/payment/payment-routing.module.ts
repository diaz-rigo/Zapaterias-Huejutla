import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './payment.component';
import { OrderDetailView } from './views/order-detail/order-detail.view';
import { paysuccess } from './views/pay-success/pay-success.view';

const routes: Routes = [
  {
    path: '', redirectTo: 'order-detail', pathMatch: 'full'
  },
  {
    path: '',
    component: PaymentComponent,
    children: [
      {
        path: 'order-detail',
        component: OrderDetailView,
      },
      {
        path: 'pay-success',
        component: paysuccess,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
