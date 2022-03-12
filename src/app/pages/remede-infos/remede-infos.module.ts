import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RemedeInfosPageRoutingModule } from './remede-infos-routing.module';

import { RemedeInfosPage } from './remede-infos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemedeInfosPageRoutingModule
  ],
  declarations: [RemedeInfosPage]
})
export class RemedeInfosPageModule {}
