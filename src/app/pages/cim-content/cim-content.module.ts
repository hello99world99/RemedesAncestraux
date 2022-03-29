import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CimContentPageRoutingModule } from './cim-content-routing.module';

import { CimContentPage } from './cim-content.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CimContentPageRoutingModule
  ],
  declarations: [CimContentPage]
})
export class CimContentPageModule {}
