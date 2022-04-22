import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceproviderhomePageRoutingModule } from './serviceproviderhome-routing.module';

import { ServiceproviderhomePage } from './serviceproviderhome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceproviderhomePageRoutingModule
  ],
  declarations: [ServiceproviderhomePage]
})
export class ServiceproviderhomePageModule {}
