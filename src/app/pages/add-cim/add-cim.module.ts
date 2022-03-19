import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCimPageRoutingModule } from './add-cim-routing.module';

import { AddCimPage } from './add-cim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCimPageRoutingModule
  ],
  declarations: [AddCimPage]
})
export class AddCimPageModule {}
