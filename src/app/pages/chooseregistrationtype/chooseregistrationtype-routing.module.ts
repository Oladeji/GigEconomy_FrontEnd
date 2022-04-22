import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseregistrationtypePage } from './chooseregistrationtype.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseregistrationtypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseregistrationtypePageRoutingModule {}
