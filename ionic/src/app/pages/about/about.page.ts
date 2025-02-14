import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class AboutPage {

  constructor(private navCtrl: NavController) { }

  goHome() {
    this.navCtrl.navigateBack('/home');
  }
}
