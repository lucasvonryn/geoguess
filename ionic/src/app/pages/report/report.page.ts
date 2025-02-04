import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
  imports: [IonicModule, CommonModule],
})
export class ReportPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
