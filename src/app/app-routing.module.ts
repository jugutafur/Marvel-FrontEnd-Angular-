import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrincipalComponent } from './layout/principal/principal.component';

import { AccessComponent } from './core/components/access/access.component';
import { RegisterComponent } from './core/components/register/register.component';

import { CuentaComponent } from './core/components/cuenta/cuenta.component';

import { GuardianAccessGuard } from './core/guards/guardian-access.guard';

const routes: Routes = [
  {
    path:'',
    component: PrincipalComponent
  },
  {
    path:'access',
    component: AccessComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'cuenta/:id',
    canActivate: [GuardianAccessGuard],
    component: CuentaComponent
  }
  // {
  //   path:'menuComponent',
  //   component: MenuComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
