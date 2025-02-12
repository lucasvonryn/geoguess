import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-level-one',
  templateUrl: './level-one.page.html',
  styleUrls: ['./level-one.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class LevelOnePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
