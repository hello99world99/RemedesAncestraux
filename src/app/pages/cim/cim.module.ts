import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CimPageRoutingModule } from './cim-routing.module';

import { CimPage } from './cim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CimPageRoutingModule
  ],
  declarations: [CimPage]
})
export class CimPageModule {}
