import { Component } from '@angular/core';

@Component({
  selector: 'app-firstGuess',
  templateUrl: './firstGuess.component.html',
  styleUrls: ['./firstGuess.component.css'],
})
export class FirstGuessComponent {
  //ripple
  centered = false;
  disabled = false;
  unbounded = false;
  red: string = 'red';
  black: string = 'black';
}
