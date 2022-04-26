import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewserviceproviderintentionsPage } from './viewserviceproviderintentions.page';

const routes: Routes = [
  {
    path: '',
    component: ViewserviceproviderintentionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewserviceproviderintentionsPageRoutingModule {}
