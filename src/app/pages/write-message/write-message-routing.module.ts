import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WriteMessagePage } from './write-message.page';

const routes: Routes = [
  {
    path: '',
    component: WriteMessagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WriteMessagePageRoutingModule {}
