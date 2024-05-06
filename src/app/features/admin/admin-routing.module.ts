import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmHomeView } from './view/adm-home/adm-home.view';
import { AdminComponent } from './admin.component';
import { ProductoView } from './view/producto/producto.view';
import { InicioView } from './view/inicio/inicio.view';
import { UsuarioView } from './view/usuario/usuario.view';
import { ComentariosView } from './view/comentarios/comentarios.view';
import { PedidosView } from './view/pedidos/pedidos.view';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'inicio',
        component: InicioView,
      },
      {
        path: 'admin-home',
        component: AdmHomeView,
      },
      {
        // path: 'detail/:id',
        path: 'productos',
        component: ProductoView,
      },
      {
        // path: 'detail/:id',
        path: 'usuarios',
        component: UsuarioView,
      },
      {
        // path: 'detail/:id',
        path: 'comentarios',
        component: ComentariosView,
      },
      {
        // path: 'detail/:id',
        path: 'pedidos',
        component: PedidosView,
      },
      // {
      //   // path: 'detail/:id',
      //   path: 'detail-categoria',
      //   component: CategoriaView,
      // },
      // {
      //   // path: 'detail/:id',
      //   path: 'detail-categoria',
      //   component: CategoriaView,
      // },
      // {
      // //   // path: 'detail/:id',
      // //   path: 'registrarme',
      // //   component: RegistroUsuarioView,
      // // },
      // {
      //   // path: 'detail/:id',
      //   path: 'acerca-empresa',
      //   component: AcercaEmpresaView,
      // },
      // {
      //   // path: 'detail/:id',
      //   path: 'login',
      //   component: AccesoUsuarioView,
      // },
      // {
      //   title:"Politica |",
      //   path: 'politica',
      //   component: PoliticaPrivView,
      // },
      // {
      //   title:"Politica |Cookies",
      //   path: 'cookies',
      //   component: PoliticaCookiesView,
      // },
      // {
      //   title:"Terminos |Condiciones",
      //   path: 'Terminos',
      //   component: TerminosCondicionesView,
      // },
      // {
      //   title:"preguntas |frecuentes",
      //   path: 'faq',
      //   component: PreguntasFreqView,
      // },
      // {
      //   title:"Acerca de |",
      //   path: 'acercade',
      //   component: AcercaDeView,
      // },
      // {
      //   title:"404",
      //   path: 'not-found',
      //   component: NotFondViews,
      // },
      // {
      //   title:"500",
      //   path: 'unknown',
      //   component: UnknownView ,
      // },
      // {
      //   title:"404",
      //   path: '**',
      //   component: NotFondViews,
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {



 }
