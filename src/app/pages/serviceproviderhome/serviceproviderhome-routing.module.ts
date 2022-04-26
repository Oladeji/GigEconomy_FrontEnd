import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceproviderhomePage } from './serviceproviderhome.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceproviderhomePage,




    children: [
      
      {
        path: 'viewclientspostedjob',
        loadChildren: () => import('../../pages/viewclientspostedjob/viewclientspostedjob.module').then( m => m.ViewclientspostedjobPageModule)
      }
      ,
      {
        path: 'viewclientapproval',
        loadChildren: () => import('../../pages/viewclientapproval/viewclientapproval.module').then( m => m.ViewclientapprovalPageModule)
      }
]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceproviderhomePageRoutingModule {}
