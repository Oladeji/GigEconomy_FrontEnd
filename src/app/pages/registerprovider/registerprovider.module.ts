import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterproviderPageRoutingModule } from './registerprovider-routing.module';

import { RegisterproviderPage } from './registerprovider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterproviderPageRoutingModule
  ],
  declarations: [RegisterproviderPage]
})
export class RegisterproviderPageModule {}
