import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RemedesPageRoutingModule } from './remedes-routing.module';

import { RemedesPage } from './remedes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemedesPageRoutingModule
  ],
  declarations: [RemedesPage]
})
export class RemedesPageModule {}
