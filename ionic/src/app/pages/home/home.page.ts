import { IonicModule, NavController } from '@ionic/angular'; 
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  constructor(private navCtrl: NavController) {}

  startGame() {
    this.navCtrl.navigateBack('/game-login');
  }
  
  showCredits() {
    this.navCtrl.navigateBack('/credits');
  }

  showAbout() {
    this.navCtrl.navigateBack('/about');
  }

  resetProgress() {
    localStorage.clear();
    alert('Progresso reiniciado!');
  }

  showReport() {
    this.navCtrl.navigateBack('/report-login');
  }

  showLevelTwo() {
    this.navCtrl.navigateBack('/level-two');
  }
  
}
