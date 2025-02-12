import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-final',
  templateUrl: './final.page.html',
  styleUrls: ['./final.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class FinalPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
