import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CimContentPage } from './cim-content.page';

const routes: Routes = [
  {
    path: '',
    component: CimContentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CimContentPageRoutingModule {}
