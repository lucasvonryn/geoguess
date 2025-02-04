import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  imports: [IonicModule, CommonModule],
})
export class AboutPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
