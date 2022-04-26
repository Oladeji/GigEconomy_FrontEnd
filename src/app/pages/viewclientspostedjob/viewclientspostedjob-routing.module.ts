import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewclientspostedjobPage } from './viewclientspostedjob.page';

const routes: Routes = [
  {
    path: '',
    component: ViewclientspostedjobPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewclientspostedjobPageRoutingModule {}
