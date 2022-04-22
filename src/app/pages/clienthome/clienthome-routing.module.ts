import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienthomePage } from './clienthome.page';

const routes: Routes = [
  {
    path: '',
    component: ClienthomePage,

      children:[{
        path:'postajob',
          // loadChildren: () => import('./pages/clienthome/clienthome.module').then( m => m.ClienthomePageModule)
           loadChildren: () => import('../../pages/postajob/postajob.module').then( m => m.PostajobPageModule)
          }
          ,
    {
      path: 'viewmypostedjobs',
      loadChildren: () => import('../../pages/viewmypostedjobs/viewmypostedjobs.module').then( m => m.ViewmypostedjobsPageModule)
    //  loadChildren: () => import('./pages/viewmypostedjobs/viewmypostedjobs.module').then( m => m.ViewmypostedjobsPageModule)

    }
       ]
  








  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienthomePageRoutingModule {}
