import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemedesPage } from './remedes.page';

const routes: Routes = [
  {
    path: '',
    component: RemedesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemedesPageRoutingModule {}
