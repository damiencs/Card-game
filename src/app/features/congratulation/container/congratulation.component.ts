import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-congratulation',
  templateUrl: './congratulation.component.html',
  styleUrls: ['./congratulation.component.css'],
})
export class CongratulationComponent {
  constructor(private router: Router) {}
  restartGame() {
    const parentURL = this.router.url.split('/')[0];
    this.router.navigate([parentURL]);
  }
}
