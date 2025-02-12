import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinalPageRoutingModule } from './final-routing.module';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FinalPage } from './final.page';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinalPageRoutingModule
  ],
  declarations: [FinalPage]
})
export class FinalPageModule {}
