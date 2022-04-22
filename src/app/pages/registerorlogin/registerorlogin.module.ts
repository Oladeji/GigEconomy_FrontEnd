import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterorloginPageRoutingModule } from './registerorlogin-routing.module';

import { RegisterorloginPage } from './registerorlogin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterorloginPageRoutingModule
  ],
  declarations: [RegisterorloginPage]
})
export class RegisterorloginPageModule {}
