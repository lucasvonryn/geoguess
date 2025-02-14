import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { IonicModule, NavController } from '@ionic/angular';

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

  constructor(private navCtrl: NavController) { }

  questions: Question[] = [
    {
      image: 'assets/images/question1.png',
      options: ['CHIMARRÃO', 'TAPIOCA', 'FEIJOADA'],
      correctAnswer: 0, // Opção A é a correta
    },
    {
      image: 'assets/images/question2.png',
      options: ['CRISTO REDENTOR', 'CHAVES', 'VILA VELHA'],
      correctAnswer: 2, // Opção C é a correta
    },
    {
      image: 'assets/images/question3.png',
      options: ['CUSCUZ', 'PINHÃO', 'PÃO DE QUEIJO'],
      correctAnswer: 1, // Opção B é a correta
    }
  ];

  currentQuestionIndex: number = 0;
  currentQuestion: Question | null = this.questions[this.currentQuestionIndex];
  clickedButtons: { index: number, status: 'correct' | 'incorrect' }[] = []; // Rastreia o estado dos botões clicados

  selectOption(selectedIndex: number) {
    if (selectedIndex === this.currentQuestion?.correctAnswer) {
      // Resposta correta: marca o botão como correto
      this.clickedButtons.push({ index: selectedIndex, status: 'correct' });

      // Avança para a próxima pergunta após 1 segundo
      setTimeout(() => {
        this.currentQuestionIndex++;
        if (this.currentQuestionIndex < this.questions.length) {
          this.currentQuestion = this.questions[this.currentQuestionIndex];
          this.clickedButtons = []; // Reseta os botões clicados para a próxima pergunta
        } else {
          // Fim do jogo
          this.currentQuestion = null;
        }
      }, 1000);
    } else {
      // Resposta incorreta: marca o botão como incorreto
      this.clickedButtons.push({ index: selectedIndex, status: 'incorrect' });
    }
  }

  getButtonColor(index: number): string {
    const button = this.clickedButtons.find(b => b.index === index);
    if (button) {
      return button.status === 'correct' ? 'success' : 'danger'; // Cores do Ionic
    }
    return 'primary'; // Cor padrão
  }

  isButtonDisabled(index: number): boolean {
    return this.clickedButtons.some(b => b.index === index); // Desabilita se o botão foi clicado
  }

  restartGame() {
    this.currentQuestionIndex = 0;
    this.currentQuestion = this.questions[this.currentQuestionIndex];
    this.clickedButtons = []; // Reseta os botões clicados
  }

  ngOnInit() {
  }

  goHome() {
    this.navCtrl.navigateBack('/home');
  }
}