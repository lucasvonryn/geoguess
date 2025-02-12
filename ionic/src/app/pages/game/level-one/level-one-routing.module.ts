import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LevelOnePage } from './level-one.page';

const routes: Routes = [
  {
    path: '',
    component: LevelOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LevelOnePageRoutingModule {}
