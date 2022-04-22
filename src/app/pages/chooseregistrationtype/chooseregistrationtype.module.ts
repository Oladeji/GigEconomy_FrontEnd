import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { IonicModule } from '@ionic/angular';

import { ChooseregistrationtypePageRoutingModule } from './chooseregistrationtype-routing.module';

import { ChooseregistrationtypePage } from './chooseregistrationtype.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseregistrationtypePageRoutingModule,ReactiveFormsModule
  ],
  declarations: [ChooseregistrationtypePage]
})
export class ChooseregistrationtypePageModule {}
