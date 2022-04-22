import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterorloginPage } from './registerorlogin.page';



const routes: Routes = [
  {
    path: '',
    component: RegisterorloginPage,

      children:[{
        path: 'login',
       loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)          }
         , 
         {
          path: 'chooseregistrationtype',
          loadChildren: () => import('../chooseregistrationtype/chooseregistrationtype.module').then( m => m.ChooseregistrationtypePageModule)
      
    }
       ]
  








  }
];








@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterorloginPageRoutingModule {}
