import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LevelTwoPageRoutingModule } from './level-two-routing.module';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LevelTwoPage } from './level-two.page';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LevelTwoPageRoutingModule
  ]
})
export class LevelTwoPageModule {}
