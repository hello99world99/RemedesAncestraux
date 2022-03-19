import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoodPracticesPageRoutingModule } from './good-practices-routing.module';

import { GoodPracticesPage } from './good-practices.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoodPracticesPageRoutingModule
  ],
  declarations: [GoodPracticesPage]
})
export class GoodPracticesPageModule {}
