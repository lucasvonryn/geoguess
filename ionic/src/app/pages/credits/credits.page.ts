import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.page.html',
  imports: [IonicModule, CommonModule],
  styleUrls: ['./credits.page.scss'],
})
export class CreditsPage implements OnInit {
  

  constructor(private router: Router) {}

  ngOnInit() {
  }

  goToHome(){
    this.router.navigate(['home']);
  }

}
