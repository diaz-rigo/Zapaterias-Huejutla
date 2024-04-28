import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeView } from './admin-home/admin-home.view';

import { ChartModule } from 'primeng/chart';
import { AdmDashboardView } from './view/adm-dashboard/adm-dashboard.view';
import { AdmHomeView } from './view/adm-home/adm-home.view';
import { ProductCrudView } from './view/products/product-crud/product-crud.view';
import { UsuarioCrudView } from './view/usuarios/usuario-crud/usuario-crud.view';
import { NotificacionesView } from './view/notificaciones/notificaciones.view';
import { ProductFormComponent } from './commons/components/product-form/product-form.component';
import { VentasComponent } from './commons/components/ventas/ventas.component';
import { PedidosComponent } from './commons/components/pedidos/pedidos.component';
// import { AdmDashboardView } from './adm-dashboard/adm-dashboard.view';
@NgModule({
  declarations: [
    AdminHomeView,
    AdmDashboardView,
    AdmHomeView,
    ProductCrudView,
    UsuarioCrudView,
    NotificacionesView,
    ProductFormComponent,
    VentasComponent,
    PedidosComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule, ChartModule
  ]
})
export class AdminModule { }
