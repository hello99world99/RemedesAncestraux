import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpPharmaPage } from './sign-up-pharma.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpPharmaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpPharmaPageRoutingModule {}
