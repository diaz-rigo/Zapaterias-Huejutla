import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundView } from './features/public/view/not-found/not-found.view';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'public',
    pathMatch: 'full',
  },
  
  {
    path: 'detailsP',
    loadChildren: () =>
      import('./features/public/public.module').then((m) => m.PublicModule),
  },
  
  {
    path: 'public',
    loadChildren: () =>
      import('./features/public/public.module').then((m) => m.PublicModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./features/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    title:"404",
    path: 'not-found',
    component: NotFoundView,
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
