import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SwiperModule } from 'swiper/angular';

import { AcceuilPagePageRoutingModule } from './acceuil-page-routing.module';
import { AcceuilPagePage } from './acceuil-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcceuilPagePageRoutingModule,
    SwiperModule
  ],
  declarations: [AcceuilPagePage]
})
export class AcceuilPagePageModule {}
