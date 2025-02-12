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
    this.router.navigate(['/game']);
  }

  resetProgress() {
    localStorage.clear();
    alert('Progresso reiniciado!');
  }

  generateReport() {
    alert('Relatório gerado!');
  }

  showCredits() {
    this.router.navigate(['/credits'])
  }
}
