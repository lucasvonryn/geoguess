import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'credits',
    loadChildren: () => import('./pages/credits/credits.module').then( m => m.CreditsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/report/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'report-form',
    loadChildren: () => import('./pages/report/report-form/report-form.module').then( m => m.ReportFormPageModule)
  },  {
    path: 'login',
    loadChildren: () => import('./pages/game/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'video',
    loadChildren: () => import('./pages/game/video/video.module').then( m => m.VideoPageModule)
  },
  {
    path: 'level-one',
    loadChildren: () => import('./pages/game/level-one/level-one.module').then( m => m.LevelOnePageModule)
  },
  {
    path: 'level-two',
    loadChildren: () => import('./pages/game/level-two/level-two.module').then( m => m.LevelTwoPageModule)
  },
  {
    path: 'final',
    loadChildren: () => import('./pages/game/final/final.module').then( m => m.FinalPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
