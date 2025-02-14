import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, NavController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule]
})
export class LoginPage implements OnInit {
  name: string = '';

  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  showVideo() {
    if (this.name.trim()) {
      this.navCtrl.navigateBack('/video');
    }
  }

  goHome() {
    this.navCtrl.navigateBack('/home');
  }
}
