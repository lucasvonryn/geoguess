import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportFormPageRoutingModule } from './report-form-routing.module';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReportFormPage } from './report-form.page';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportFormPageRoutingModule
  ],
  declarations: [ReportFormPage] // Adicione o componente aqui
})
export class ReportFormPageModule {}