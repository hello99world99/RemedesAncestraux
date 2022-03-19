import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditCimPageRoutingModule } from './edit-cim-routing.module';

import { EditCimPage } from './edit-cim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditCimPageRoutingModule
  ],
  declarations: [EditCimPage]
})
export class EditCimPageModule {}
