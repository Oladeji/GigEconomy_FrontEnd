import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterproviderPageRoutingModule } from './registerprovider-routing.module';

import { RegisterproviderPage } from './registerprovider.page';
import { Geolocation } from 'node_modules/@awesome-cordova-plugins/geolocation/ngx';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterproviderPageRoutingModule,ReactiveFormsModule
  ],
  declarations: [RegisterproviderPage],
  providers:[Geolocation]
})
export class RegisterproviderPageModule {}
