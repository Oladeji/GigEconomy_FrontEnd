import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterproviderPage } from './registerprovider.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterproviderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterproviderPageRoutingModule {}
