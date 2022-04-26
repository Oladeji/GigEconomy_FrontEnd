import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewserviceproviderintentionsPageRoutingModule } from './viewserviceproviderintentions-routing.module';

import { ViewserviceproviderintentionsPage } from './viewserviceproviderintentions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewserviceproviderintentionsPageRoutingModule
  ],
  declarations: [ViewserviceproviderintentionsPage]
})
export class ViewserviceproviderintentionsPageModule {}
