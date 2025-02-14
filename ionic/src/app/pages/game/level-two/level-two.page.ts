import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { IonicModule, NavController, ToastController } from '@ionic/angular';

interface Question {
  image: string;
  options: string[];
  correctAnswer: number; // Índice da opção correta
}

@Component({
  selector: 'app-level-two',
  templateUrl: './level-two.page.html',
  styleUrls: ['./level-two.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class LevelTwoPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private toastController: ToastController
  ) { }

  questions: Question[] = [
    {
      image: 'assets/images/level-two/question1.png',
      options: ['CHIMARRÃO', 'TAPIOCA', 'FEIJOADA'],
      correctAnswer: 0, // Opção A é a correta
    },
    {
      image: 'assets/images/level-two/question2.png',
      options: ['CRISTO REDENTOR', 'CHAVES', 'VILA VELHA'],
      correctAnswer: 2, // Opção C é a correta
    },
    {
      image: 'assets/images/level-two/question3.png',
      options: ['CUSCUZ', 'PINHÃO', 'PÃO DE QUEIJO'],
      correctAnswer: 1, // Opção B é a correta
    },
    {
      image: 'assets/images/level-two/question4.png',
      options: ['TUCANO', 'CACHORRO QUENTE', 'ÁRVORE ARAUCÁRIA'],
      correctAnswer: 2, // Opção C é a correta
    },
    {
      image: 'assets/images/level-two/question5.png',
      options: ['PAU-BRASIL', 'ARARA', 'CAPIVARA'],
      correctAnswer: 2, // Opção C é a correta
    }
  ];

  currentQuestionIndex: number = 0;
  currentQuestion: Question | null = this.questions[this.currentQuestionIndex];
  clickedButtons: { index: number, status: 'correct' | 'incorrect' }[] = []; // Rastreia o estado dos botões clicados

  // Armazena o resultado de cada questão: "unanswered", "correct" ou "wrong"
  questionResults: string[] = new Array(this.questions.length).fill("unanswered");

  // Flag para desabilitar todas as opções após a resposta correta
  allDisabled: boolean = false;

  // Variável para armazenar o toast atual
  currentToast: any = null;

  async selectOption(selectedIndex: number) {
    // Remove o toast anterior, se existir
    if (this.currentToast) {
      await this.currentToast.dismiss();
      this.currentToast = null;
    }

    if (selectedIndex === this.currentQuestion?.correctAnswer) {
      // Verifica se já houve tentativa incorreta
      const anyWrong = this.clickedButtons.some(b => b.status === 'incorrect');
      this.clickedButtons.push({ index: selectedIndex, status: 'correct' });
      this.questionResults[this.currentQuestionIndex] = anyWrong ? 'wrong' : 'correct';
      this.allDisabled = true;
      await this.presentToast("Resposta Correta! 🎉", 'success');

      // Avança para a próxima pergunta após 1 segundo e reseta allDisabled
      setTimeout(() => {
        this.currentQuestionIndex++;
        if (this.currentQuestionIndex < this.questions.length) {
          this.currentQuestion = this.questions[this.currentQuestionIndex];
          this.clickedButtons = [];
          this.allDisabled = false;
        } else {
          // Fim do jogo
          this.currentQuestion = null;
        }
      }, 1000);
    } else {
      this.clickedButtons.push({ index: selectedIndex, status: 'incorrect' });
      this.questionResults[this.currentQuestionIndex] = 'wrong';
      await this.presentToast("Resposta Errada! ❌", 'danger');
    }
  }

  async presentToast(message: string, color: string) {
    if (this.currentToast) {
      await this.currentToast.dismiss();
      this.currentToast = null;
    }
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'top',
      translucent: false,
      animated: true,
      // Usamos cssClass customizada para forçar as cores sem afetar o overlay
      cssClass: color === 'success' ? 'custom-toast-success' : (color === 'danger' ? 'custom-toast-danger' : '')
    });
    this.currentToast = toast;
    toast.present();
  }

  getButtonColor(index: number): string {
    const button = this.clickedButtons.find(b => b.index === index);
    if (button) {
      return button.status === 'correct' ? 'success' : 'danger';
    }
    return 'primary';
  }

  isButtonDisabled(index: number): boolean {
    return this.allDisabled || this.clickedButtons.some(b => b.index === index);
  }

  isOptionCorrect(index: number): boolean {
    const button = this.clickedButtons.find(b => b.index === index);
    return button ? button.status === 'correct' : false;
  }

  isOptionWrong(index: number): boolean {
    const button = this.clickedButtons.find(b => b.index === index);
    return button ? button.status === 'incorrect' : false;
  }

  // Retorna a classe para o quadrado de progresso de acordo com o estado da questão
  getSquareClass(index: number): string {
    if (index === this.currentQuestionIndex) {
      // Se a questão atual ainda não foi respondida, destaca em azul; caso contrário, usa o resultado
      return this.questionResults[index] === "unanswered" ? "current" : this.questionResults[index];
    } else if (index < this.currentQuestionIndex) {
      return this.questionResults[index];
    }
    return "";
  }

  restartGame() {
    this.currentQuestionIndex = 0;
    this.currentQuestion = this.questions[this.currentQuestionIndex];
    this.clickedButtons = [];
    this.questionResults = new Array(this.questions.length).fill("unanswered");
    this.allDisabled = false;
  }

  ngOnInit() { }

  goHome() {
    this.navCtrl.navigateBack('/home');
  }
}
