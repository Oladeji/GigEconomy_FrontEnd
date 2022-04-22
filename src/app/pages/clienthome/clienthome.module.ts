import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienthomePageRoutingModule } from './clienthome-routing.module';

import { ClienthomePage } from './clienthome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienthomePageRoutingModule
  ],
  declarations: [ClienthomePage]
})
export class ClienthomePageModule {}
