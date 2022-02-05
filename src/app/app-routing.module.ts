import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/acceuil-page/acceuil-page.module').then( m => m.AcceuilPagePageModule)
  },
  {
    path: 'sign-in-page',
    loadChildren: () => import('./pages/sign-in-page/sign-in-page.module').then( m => m.SignInPagePageModule)
  },
  {
    path: 'sign-up-page',
    loadChildren: () => import('./pages/sign-up-page/sign-up-page.module').then( m => m.SignUpPagePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
