import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-level-one',
  templateUrl: './level-one.page.html',
  styleUrls: ['./level-one.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class LevelOnePage {
  questions = [
    {
      question: "Qual o nome do rio a oeste do Estado?",
      options: [
        { letter: 'A', text: 'Rio Amazonas' },
        { letter: 'B', text: 'Rio Negro' },
        { letter: 'C', text: 'Rio Paraguai' },
        { letter: 'D', text: 'RIO PARANÁ', correct: true }
      ]
    },
    {
      question: "Qual o significado do Rio Paraná em Tupi?",
      options: [
        { letter: 'A', text: 'Pequeno como a rocha' },
        { letter: 'B', text: 'Rápido como o vento' },
        { letter: 'C', text: 'GRANDE, PARECIDO COM O MAR', correct: true },
        { letter: 'D', text: 'Branco como a neve' }
      ]
    },
    {
      question: "Qual árvore está no brasão do Estado?",
      options: [
        { letter: 'A', text: 'Araucária', correct: true },
        { letter: 'B', text: 'Pau-Brasil' },
        { letter: 'C', text: 'Jacarandá' },
        { letter: 'D', text: 'Ipê-Amarelo' }
      ]
    },
    {
      question: "Qual ave dispersa as sementes da Araucária, e também é símbolo do Estado?",
      options: [
        { letter: 'A', text: 'Arara' },
        { letter: 'B', text: 'Canário' },
        { letter: 'C', text: 'Coruja' },
        { letter: 'D', text: 'GRALHA-AZUL', correct: true }
      ]
    },
    {
      question: "Onde fica a Catedral mais alta da América Latina?",
      options: [
        { letter: 'A', text: 'Curitiba' },
        { letter: 'B', text: 'Ponta-Grossa' },
        { letter: 'C', text: 'Campo-Largo' },
        { letter: 'D', text: 'MARINGÁ', correct: true }
      ]
    }
  ];

  currentQuestion = 0;
  currentQuestionObj = this.questions[this.currentQuestion];
  
  clickedButtons: { index: number, status: 'correct' | 'incorrect' }[] = [];

  // Variáveis para desabilitar botões e exibir a seta para avançar
  allDisabled = false;
  canGoNext = false;

  constructor(
    private navCtrl: NavController,
    private toastController: ToastController
  ) {}

  async answer(selectedIndex: number) {
    const option = this.currentQuestionObj.options[selectedIndex];

    if (option.correct) {
      this.clickedButtons.push({ index: selectedIndex, status: 'correct' });
      this.allDisabled = true;
      this.canGoNext = true;

      // Usando ion-toast para mensagem de resposta correta
      await this.presentToast("Resposta Correta! 🎉", 'success');
    } else {
      this.clickedButtons.push({ index: selectedIndex, status: 'incorrect' });
      await this.presentToast("Resposta Errada! ❌", 'danger');
    }
  }

  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'top',
      color
    });
    toast.present();
  }

  goNext() {
    if (this.currentQuestion < this.questions.length - 1) {
      this.currentQuestion++;
      this.currentQuestionObj = this.questions[this.currentQuestion];
      this.clickedButtons = [];
      this.allDisabled = false;
      this.canGoNext = false;
    } else {
      // Ao final das 5 questões, navega para a fase 2 "level-two"
      this.navCtrl.navigateForward('/level-two');
    }
  }

  getButtonColor(index: number): string {
    const button = this.clickedButtons.find(b => b.index === index);
    return button ? (button.status === 'correct' ? 'success' : 'danger') : 'primary';
  }

  isButtonDisabled(index: number): boolean {
    return this.allDisabled || this.clickedButtons.some(b => b.index === index);
  }

  // Métodos auxiliares (implementações completas)
  playAudio() {
    let audio = new Audio('assets/audio/pergunta.mp3');
    audio.play();
  }

  showHint() {
    alert('Dica: Observe as palavras-chave da pergunta!');
  }
  
  goHome() {
    this.navCtrl.navigateBack('/home');
  }

  goBack() {
    this.navCtrl.navigateBack('/video');
  }
}
