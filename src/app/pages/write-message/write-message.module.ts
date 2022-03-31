import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WriteMessagePageRoutingModule } from './write-message-routing.module';

import { WriteMessagePage } from './write-message.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WriteMessagePageRoutingModule
  ],
  declarations: [WriteMessagePage]
})
export class WriteMessagePageModule {}
