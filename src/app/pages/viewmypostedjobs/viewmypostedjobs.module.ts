import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewmypostedjobsPageRoutingModule } from './viewmypostedjobs-routing.module';

import { ViewmypostedjobsPage } from './viewmypostedjobs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewmypostedjobsPageRoutingModule
  ],
  declarations: [ViewmypostedjobsPage]
})
export class ViewmypostedjobsPageModule {}
