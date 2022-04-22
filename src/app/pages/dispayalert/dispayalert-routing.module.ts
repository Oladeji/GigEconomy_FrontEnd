import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DispayalertPage } from './dispayalert.page';

const routes: Routes = [
  {
    path: '',
    component: DispayalertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DispayalertPageRoutingModule {}
