import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostajobPage } from './postajob.page';

const routes: Routes = [
  {
    path: '',
    component: PostajobPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostajobPageRoutingModule {}
