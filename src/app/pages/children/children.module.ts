import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChildrenPageRoutingModule } from './children-routing.module';
import { ChildrenPage } from './children.page';
import { CountPipe } from 'src/app/pipes/count.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChildrenPageRoutingModule
  ],
  declarations: [ChildrenPage, CountPipe]
})
export class ChildrenPageModule {}
