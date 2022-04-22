import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceproviderhomePage } from './serviceproviderhome.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceproviderhomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceproviderhomePageRoutingModule {}
