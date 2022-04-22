import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DispayalertPageRoutingModule } from './dispayalert-routing.module';

import { DispayalertPage } from './dispayalert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DispayalertPageRoutingModule
  ],
  declarations: [DispayalertPage]
})
export class DispayalertPageModule {}
