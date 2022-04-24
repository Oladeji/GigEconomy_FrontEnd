import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostajobPageRoutingModule } from './postajob-routing.module';

import { PostajobPage } from './postajob.page';
import { Geolocation } from 'node_modules/@awesome-cordova-plugins/geolocation/ngx';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostajobPageRoutingModule,ReactiveFormsModule
  ],
  declarations: [PostajobPage],
  providers:[Geolocation]
})
export class PostajobPageModule {}
