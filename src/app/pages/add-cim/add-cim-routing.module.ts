import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCimPage } from './add-cim.page';

const routes: Routes = [
  {
    path: '',
    component: AddCimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCimPageRoutingModule {}
