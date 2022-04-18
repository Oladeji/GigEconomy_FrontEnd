import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from 'oldnode_modules/@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';
import { Geolocation } from 'oldnode_modules/@awesome-cordova-plugins/geolocation/ngx';
import { RegisterPage } from './register.page';

//import { Camera, CameraOptions } from 'oldnode_modules/@awesome-cordova-plugins/camera/ngx';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,ReactiveFormsModule
  ],
  declarations: [RegisterPage],
  providers:[Geolocation]
})
export class RegisterPageModule {}
