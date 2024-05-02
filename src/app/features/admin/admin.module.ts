import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { AdmDashboardView } from './view/adm-dashboard/adm-dashboard.view';
import { AdmHomeView } from './view/adm-home/adm-home.view';
import { UsuarioCrudView } from './view/usuarios/usuario-crud/usuario-crud.view';
import { NotificacionesView } from './view/notificaciones/notificaciones.view';
import { ProductFormComponent } from './commons/components/product-form/product-form.component';
import { VentasComponent } from './commons/components/ventas/ventas.component';
import { PedidosComponent } from './commons/components/pedidos/pedidos.component';
import { MaterialModule } from './commons/material/material.module';
import { AdminComponent } from './admin.component';
import { ProductoView } from './view/producto/producto.view';
// import { AdmDashboardView } from './adm-dashboard/adm-dashboard.view';
@NgModule({
  declarations: [

    AdmDashboardView,
    AdmHomeView,
    UsuarioCrudView,
    NotificacionesView,
    ProductFormComponent,
    VentasComponent,
    PedidosComponent,
    AdminComponent,
    ProductoView
  ],
  imports: [
    CommonModule,
    AdminRoutingModule, MaterialModule
  ]
})
export class AdminModule { }
