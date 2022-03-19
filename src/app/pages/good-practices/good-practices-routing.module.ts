import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoodPracticesPage } from './good-practices.page';

const routes: Routes = [
  {
    path: '',
    component: GoodPracticesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoodPracticesPageRoutingModule {}
