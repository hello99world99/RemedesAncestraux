import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpPharmaPageRoutingModule } from './sign-up-pharma-routing.module';

import { SignUpPharmaPage } from './sign-up-pharma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpPharmaPageRoutingModule
  ],
  declarations: [SignUpPharmaPage]
})
export class SignUpPharmaPageModule {}
