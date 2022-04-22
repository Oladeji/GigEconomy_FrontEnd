import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewmypostedjobsPage } from './viewmypostedjobs.page';

const routes: Routes = [
  {
    path: '',
    component: ViewmypostedjobsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewmypostedjobsPageRoutingModule {}
