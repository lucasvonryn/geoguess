import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-level-one',
  templateUrl: './level-one.page.html',
  styleUrls: ['./level-one.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class LevelOnePage {
  pergunta = "{Região Sul}\nQual dessas opções mostra uma comida típica da região Sul do Brasil?";
  opcoes = [
    { letra: 'A', texto: 'Feijoada' },
    { letra: 'B', texto: 'Chimarrão' },
    { letra: 'C', texto: 'Tapioca' },
    { letra: 'D', texto: 'Cuscuz' }
  ];
  estrelas = 3; // Defina quantas estrelas já foram ganhas.

  constructor(private navCtrl: NavController) {}

  goHome() {
    this.navCtrl.navigateBack('/home');
  }

  goBack() {
    this.navCtrl.navigateBack('/previous');
  }

  playAudio() {
    // Aqui você pode tocar um áudio explicando a pergunta
    let audio = new Audio('assets/audio/pergunta.mp3');
    audio.play();
  }

  showHint() {
    alert('Dica: Essa bebida é muito consumida no Sul!');
  }
}
