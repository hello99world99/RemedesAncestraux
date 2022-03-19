import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditCimPage } from './edit-cim.page';

const routes: Routes = [
  {
    path: '',
    component: EditCimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditCimPageRoutingModule {}
