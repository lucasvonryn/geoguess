import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-level-two',
  templateUrl: './level-two.page.html',
  styleUrls: ['./level-two.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class LevelTwoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
