import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.page.html',
  styleUrls: ['./credits.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class CreditsPage {

  constructor(private navCtrl: NavController) { }

  goHome() {
    this.navCtrl.navigateBack('/home');
  }
}
