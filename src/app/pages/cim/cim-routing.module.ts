import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CimPage } from './cim.page';

const routes: Routes = [
  {
    path: '',
    component: CimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CimPageRoutingModule {}
