import { PublicComponent } from './public.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeView } from './view/home/home.view';
import { DetailView } from './view/detail/detail.view';
import { CategoriaView } from './view/categoria/categoria.view';
import { RegistroUsuarioView } from './view/registro-usuario/registro-usuario.view';
import { AcercaEmpresaView } from './view/acerca-empresa/acerca-empresa.view';
import { AccesoUsuarioView } from './view/acceso-usuario/acceso-usuario.view';
// import { DetaillProductComponent } from './view/detaill-product/detaill-product.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: 'home',
        component: HomeView,
      },
      {
        // path: 'detail/:id',
        path: 'detail',
        component: DetailView,
      },
      {
        // path: 'detail/:id',
        path: 'detail-categoria',
        component: CategoriaView,
      },
      {
        // path: 'detail/:id',
        path: 'detail-categoria',
        component: CategoriaView,
      },
      {
        // path: 'detail/:id',
        path: 'registrarme',
        component: RegistroUsuarioView,
      },
      {
        // path: 'detail/:id',
        path: 'acerca-empresa',
        component: AcercaEmpresaView,
      },
      {
        // path: 'detail/:id',
        path: 'login',
        component: AccesoUsuarioView,
      },
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
  exports: [RouterModule],
})
export class PublicRoutingModule {}
