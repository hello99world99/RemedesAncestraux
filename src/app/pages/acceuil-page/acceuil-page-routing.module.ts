import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcceuilPagePage } from './acceuil-page.page';

const routes: Routes = [
  {
    path: '',
    component: AcceuilPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcceuilPagePageRoutingModule {}
