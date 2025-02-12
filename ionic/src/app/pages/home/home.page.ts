import { IonicModule } from '@ionic/angular'; 
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
  constructor(private router: Router) {}

  startGame() {
    this.router.navigate(['game-login']);
  }
  
  showCredits() {
    this.router.navigate(['credits'])
  }

  showAbout() {
    this.router.navigate(['about']);
  }

  resetProgress() {
    localStorage.clear();
    alert('Progresso reiniciado!');
  }

  showReport() {
    this.router.navigate(['report-login']);
  }

  showLevelTwo() {
    this.router.navigate(['level-two']);
  }
  
}
