import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { cardService } from '/OutStem Coding Challenge/card-game/src/app/services/card.service';
@Component({
  selector: 'app-firstGuess',
  templateUrl: './firstGuess.component.html',
  styleUrls: ['./firstGuess.component.css'],
})
export class FirstGuessComponent {
  constructor(private router: Router,private cardService: cardService) {}

  //ripple
  centered = false;
  disabled = false;
  unbounded = false;
  red: string = 'red';
  black: string = 'black';

  clickView() {
    console.log(this.cardService.getDeck());
    this.router.navigate(['/second']);
  }
}
