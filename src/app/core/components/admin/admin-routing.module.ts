import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavagationComponent } from './navagation/navagation.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { TableComponent } from './table/table.component';
import { TreeComponent } from './tree/tree.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path:'',
    component: NavagationComponent,
    children:[
      {
        path:'addressFrom',
        component: AddressFormComponent
      },
      {
        path: 'table',
        component: TableComponent
      },
      {
        path: 'tree',
        component: TreeComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
