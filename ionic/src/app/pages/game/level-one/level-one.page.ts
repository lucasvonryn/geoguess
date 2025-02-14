import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-level-one',
  templateUrl: './level-one.page.html',
  styleUrls: ['./level-one.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class LevelOnePage {
  // List of questions and answers
  questions = [
    {
      question: "Qual o nome do rio a oeste do Estado?",
      options: [
        { letter: 'A', text: 'Rio Amazonas' },
        { letter: 'B', text: 'Rio Negro' },
        { letter: 'C', text: 'Rio Paraguai' },
        { letter: 'D', text: 'RIO PARANÁ', correct: true }
      ],
      answered: false,
      isCorrect: false
    },
    {
      question: "Qual o significado do Rio Paraná em Tupi?",
      options: [
        { letter: 'A', text: 'Pequeno como a rocha' },
        { letter: 'B', text: 'Rápido como o vento' },
        { letter: 'C', text: 'GRANDE, PARECIDO COM O MAR', correct: true },
        { letter: 'D', text: 'Branco como a neve' }
      ],
      answered: false,
      isCorrect: false
    },
    {
      question: "Qual árvore está no brasão do Estado?",
      options: [
        { letter: 'A', text: 'Araucária', correct: true },
        { letter: 'B', text: 'Pau-Brasil' },
        { letter: 'C', text: 'Jacarandá' },
        { letter: 'D', text: 'Ipê-Amarelo' }
      ],
      answered: false,
      isCorrect: false
    },
    {
      question: "Qual ave dispersa as sementes da Araucária, e também é símbolo do Estado?",
      options: [
        { letter: 'A', text: 'Arara' },
        { letter: 'B', text: 'Canário' },
        { letter: 'C', text: 'Coruja' },
        { letter: 'D', text: 'GRALHA-AZUL', correct: true }
      ],
      answered: false,
      isCorrect: false
    },
    {
      question: "Onde fica a Catedral mais alta da América Latina?",
      options: [
        { letter: 'A', text: 'Curitiba' },
        { letter: 'B', text: 'Ponta-Grossa' },
        { letter: 'C', text: 'Campo-Largo' },
        { letter: 'D', text: 'MARINGÁ', correct: true }
      ],
      answered: false,
      isCorrect: false
    }
  ];

  currentQuestion = 0;

  constructor(private navCtrl: NavController, private alertCtrl: AlertController) {}

  goHome() {
    this.navCtrl.navigateBack('/home');
  }

  goBack() {
    this.navCtrl.navigateBack('/video');
  }

  playAudio() {
    let audio = new Audio('assets/audio/pergunta.mp3');
    audio.play();
  }

  showHint() {
    alert('Dica: Observe as palavras-chave da pergunta!');
  }

  async answer(option: any) {
    // Mark as answered
    if (!this.questions[this.currentQuestion].answered) {
      this.questions[this.currentQuestion].answered = true;
      this.questions[this.currentQuestion].isCorrect = option.correct;

      if (option.correct) {
        await this.showAlert("Resposta Correta! 🎉");
      } else {
        await this.showAlert("Resposta Errada! ❌");
      }
    }
  }

  async showAlert(message: string) {
    const alert = await this.alertCtrl.create({
      header: 'Resultado',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  nextQuestion() {
    if (this.currentQuestion < this.questions.length - 1) {
      this.currentQuestion++;
    } else {
      this.goHome();
    }
  }

  // Return class for red color if wrong answer
  getOptionClass(option: any) {
    const currentQuestion = this.questions[this.currentQuestion];
    if (currentQuestion.answered) {
      return option.correct ? 'correct' : 'incorrect';
    }
    return '';
  }
}
