import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewclientspostedjobPageRoutingModule } from './viewclientspostedjob-routing.module';

import { ViewclientspostedjobPage } from './viewclientspostedjob.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewclientspostedjobPageRoutingModule
  ],
  declarations: [ViewclientspostedjobPage]
})
export class ViewclientspostedjobPageModule {}
