import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';
import { IonicModule } from '@ionic/angular';
import { RemedeInfosPageRoutingModule } from './remede-infos-routing.module';
import { RemedeInfosPage } from './remede-infos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemedeInfosPageRoutingModule,
    SwiperModule
  ],
  declarations: [RemedeInfosPage]
})
export class RemedeInfosPageModule {}
