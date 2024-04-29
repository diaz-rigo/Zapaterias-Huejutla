import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { SignUpView } from './view/sign-up/sign-up.view';
import { AccesoUsuarioView } from './view/acceso-usuario/acceso-usuario.view';
const routes: Routes = [
  {
    path:'',redirectTo:'sign-up' ,pathMatch:'full'
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'sign-up',
        component: SignUpView,
      }  ,  
      {
        // path: 'detail/:id',
        path: 'login',
        component: AccesoUsuarioView,
      },
    
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
