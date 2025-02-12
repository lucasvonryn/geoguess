import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule} from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class VideoPage implements OnInit {
  
  constructor(private router: Router) {}

  ngOnInit() {}

  goHome() {
    this.router.navigate(['/home']);
  }

  goBack() {
    this.router.navigate(['/game-login']);
  }

  goLevelOne() {
    this.router.navigate(['/level-one']);
  }

  reloadVideo(videoElement: HTMLVideoElement) {
    videoElement.load();
    videoElement.play();
  }
}