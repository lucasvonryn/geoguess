import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  imports: [IonicModule, CommonModule],
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
