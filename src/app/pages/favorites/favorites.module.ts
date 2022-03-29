import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FavoritesPageRoutingModule } from './favorites-routing.module';
import { FavoritesPage } from './favorites.page';
import { CimComponent } from 'src/app/components/favorites/cim/cim.component';
import { IllnessComponent } from 'src/app/components/favorites/illness/illness.component';
import { RemedyComponent } from 'src/app/components/favorites/remedy/remedy.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritesPageRoutingModule
  ],
  declarations: [FavoritesPage, CimComponent, IllnessComponent, RemedyComponent]
})
export class FavoritesPageModule {}
