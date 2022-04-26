import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewclientapprovalPageRoutingModule } from './viewclientapproval-routing.module';

import { ViewclientapprovalPage } from './viewclientapproval.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewclientapprovalPageRoutingModule
  ],
  declarations: [ViewclientapprovalPage]
})
export class ViewclientapprovalPageModule {}
