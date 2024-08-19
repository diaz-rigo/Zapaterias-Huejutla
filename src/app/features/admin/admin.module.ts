import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { AdmDashboardView } from './view/adm-dashboard/adm-dashboard.view';
import { AdmHomeView } from './view/adm-home/adm-home.view';
// import { UsuarioCrudView } from './view/usuarios/usuario-crud/usuario-crud.view';
import { NotificacionesView } from './view/notificaciones/notificaciones.view';
import { ProductFormComponent } from './commons/components/product-form/product-form.component';
import { VentasComponent } from './commons/components/ventas/ventas.component';
import { PedidosComponent } from './commons/components/pedidos/pedidos.component';
import { MaterialModule } from './commons/material/material.module';
import { AdminComponent } from './admin.component';
import { ProductoView } from './view/producto/producto.view';
import { InicioView } from './view/inicio/inicio.view';
import { TablaUsuarioComponent } from './commons/components/tabla-usuario/tabla-usuario.component';
import { UsuarioView } from './view/usuario/usuario.view';

import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ComentariosView } from './view/comentarios/comentarios.view';
import { PedidosView } from './view/pedidos/pedidos.view';
import { adminComponentsModule } from './commons/components/components.module';
import { AdminCommonsModule } from './commons/commons.module';
import { ReactiveFormsModule } from '@angular/forms';

import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { OrdersView } from './view/orders/orders.view';
const MATERIALS = [
  AvatarModule, AvatarGroupModule,IconFieldModule,InputIconModule,InputTextModule
]
// import { AdmDashboardView } from './adm-dashboard/adm-dashboard.view';
@NgModule({
  declarations: [

    AdmDashboardView,
    AdmHomeView,
    // UsuarioCrudView,
    NotificacionesView,
    VentasComponent,
    PedidosComponent,
    AdminComponent,
    ProductoView,
    InicioView,
    TablaUsuarioComponent,
    UsuarioView,
    ComentariosView,
    PedidosView,
    OrdersView
  ],
  imports: [MATERIALS,
    CommonModule,    ReactiveFormsModule,

    AdminRoutingModule, MaterialModule,adminComponentsModule,AdminCommonsModule
  ]
})
export class AdminModule { }
