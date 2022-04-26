import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewclientapprovalPage } from './viewclientapproval.page';

const routes: Routes = [
  {
    path: '',
    component: ViewclientapprovalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewclientapprovalPageRoutingModule {}
