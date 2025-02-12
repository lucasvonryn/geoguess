import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.page.html',
  styleUrls: ['./report-form.page.scss'],
  standalone: true, // Isso indica que o componente é standalone
  imports: [CommonModule, IonicModule]
})
export class ReportFormPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
 