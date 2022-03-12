import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';
import { IonicModule } from '@ionic/angular';

import { DetailsPageRoutingModule } from './details-routing.module';

import { DetailsPage } from './details.page';
import { IncludePipe } from 'src/app/pipes/include.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsPageRoutingModule,
    SwiperModule,
  ],
  declarations: [DetailsPage, IncludePipe]
})
export class DetailsPageModule {}
