import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/cim/cim.module').then( m => m.CimPageModule)
  },
  {
    path: 'gerer',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'children',
    loadChildren: () => import('./pages/children/children.module').then( m => m.ChildrenPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./pages/sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./pages/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'sign-up-pharma',
    loadChildren: () => import('./pages/sign-up-pharma/sign-up-pharma.module').then( m => m.SignUpPharmaPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./pages/details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'remedes',
    loadChildren: () => import('./pages/remedes/remedes.module').then( m => m.RemedesPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },  {
    path: 'remede-infos',
    loadChildren: () => import('./pages/remede-infos/remede-infos.module').then( m => m.RemedeInfosPageModule)
  },
  {
    path: 'good-practices',
    loadChildren: () => import('./pages/good-practices/good-practices.module').then( m => m.GoodPracticesPageModule)
  },
  {
    path: 'add-cim',
    loadChildren: () => import('./pages/add-cim/add-cim.module').then( m => m.AddCimPageModule)
  },
  {
    path: 'edit-cim',
    loadChildren: () => import('./pages/edit-cim/edit-cim.module').then( m => m.EditCimPageModule)
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
