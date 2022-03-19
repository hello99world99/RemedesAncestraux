import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DashboardPageRoutingModule } from './dashboard-routing.module';
import { DashboardPage } from './dashboard.page';
import { CimSectionComponent } from 'src/app/components/cim-section/cim-section.component';
import { UsersSectionComponent } from 'src/app/components/users-section/users-section.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
  ],
  declarations: [DashboardPage, CimSectionComponent, UsersSectionComponent]
})
export class DashboardPageModule {}
