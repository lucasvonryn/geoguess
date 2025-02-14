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
  
  // Armazena os cliques da questão atual
  clickedButtons: { index: number, status: 'correct' | 'incorrect' }[] = [];
  
  // Armazena o resultado de cada questão: 'unanswered', 'correct' ou 'wrong'
  questionResults: string[] = new Array(this.questions.length).fill("unanswered");

  // Variáveis para desabilitar botões e exibir a seta para avançar
  allDisabled = false;
  canGoNext = false;

  // Variável para armazenar o toast atual
  currentToast: any = null;

  constructor(
    private navCtrl: NavController,
    private toastController: ToastController
  ) {}

  async answer(selectedIndex: number) {
    const option = this.currentQuestionObj.options[selectedIndex];
  
    // Remove o toast anterior, se existir
    if (this.currentToast) {
      await this.currentToast.dismiss();
      this.currentToast = null;
    }
  
    if (option.correct) {
      // Verifica se houve alguma tentativa incorreta antes
      const anyWrong = this.clickedButtons.some(b => b.status === 'incorrect');
      this.clickedButtons.push({ index: selectedIndex, status: 'correct' });
      
      // Se houve tentativa errada, marca a questão como 'wrong', senão 'correct'
      this.questionResults[this.currentQuestion] = anyWrong ? 'wrong' : 'correct';
      
      this.allDisabled = true;
      this.canGoNext = true;
  
      // Toast para resposta correta (verde)
      await this.presentToast("Resposta Correta! 🎉", 'success');
  
      // Aguarda 1 segundo antes de avançar para a próxima pergunta
      setTimeout(() => {
        this.goNext();
      }, 1000); // 1000ms = 1 segundo
    } else {
      this.clickedButtons.push({ index: selectedIndex, status: 'incorrect' });
      this.questionResults[this.currentQuestion] = 'wrong';
      
      // Toast para resposta errada (vermelho)
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
      color  // 'success' para verde e 'danger' para vermelho
    });
    this.currentToast = toast;
    toast.present();
  }

  goNext() {
    if (this.currentQuestion < this.questions.length - 1) {
      // Avança para a próxima pergunta
      this.currentQuestion++;
      this.currentQuestionObj = this.questions[this.currentQuestion];
      this.clickedButtons = []; // Reseta os botões clicados
      this.allDisabled = false; // Habilita os botões novamente
      this.canGoNext = false; // Desabilita o botão de avançar até a próxima resposta
    } else {
      // Todas as questões foram respondidas, navega para a fase 2
      this.navCtrl.navigateBack('/level-two');
    }
  }

  getButtonColor(index: number): string {
    const button = this.clickedButtons.find(b => b.index === index);
    return button ? (button.status === 'correct' ? 'success' : 'danger') : 'primary';
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
    if (index === this.currentQuestion) {
      // Se a questão atual ainda não foi respondida, destaque em azul
      return "current";
    } else if (index < this.currentQuestion) {
      // Questões já respondidas
      if (this.questionResults[index] === 'correct') {
        return "correct";
      } else if (this.questionResults[index] === 'wrong') {
        return "wrong";
      }
    }
    return "";
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
