import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, NavController} from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class VideoPage implements OnInit {
  
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  goHome() {
    this.navCtrl.navigateBack('/home');
  }

  goBack() {
    this.navCtrl.navigateBack('/game-login');
  }

  goLevelOne() {
    this.navCtrl.navigateBack('/level-one');
  }

  reloadVideo(videoElement: HTMLVideoElement) {
    videoElement.load();
    videoElement.play();
  }
}