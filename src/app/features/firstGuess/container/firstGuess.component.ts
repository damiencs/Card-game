import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { cardService } from 'src/app/services/card.service';
import { DeckModel } from 'src/app/models/deck.model';
import { DrawDeckModel } from 'src/app/models/drawDeck.model';
import { CardModel } from 'src/app/models/card.model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogSuccess } from '../../../dialog/dialogSuccess/dialogSuccess.component';
import { DialogFailure } from 'src/app/dialog/dialogFailure/dialogFailure.component';

@Component({
  selector: 'app-firstGuess',
  templateUrl: './firstGuess.component.html',
  styleUrls: ['./firstGuess.component.css'],
})
export class FirstGuessComponent {
  deckObj: DeckModel;

  constructor(
    private router: Router,
    private cardService: cardService,
    private dialog: MatDialog
  ) {
    this.cardService.getDeck().subscribe((data) => {
      this.deckObj = data;
    });
  }

  //ripple
  centered = false;
  disabled = false;
  unbounded = false;
  red: string = 'red';
  black: string = 'black';

  clickView() {
    this.router.navigate(['/second']);
  }

  btnClick(color: string) {
    let card: CardModel[] = [];
    let enterAnimationDuration: string = '1000ms';
    let exitAnimationDuration: string = '500ms';

    this.cardService.drawCard(this.deckObj.deck_id).subscribe((res) => {
      card = res.cards;
      this.cardService.sendCurrentDeck(res);
      if (
        color == 'black' &&
        (card[0].suit == 'SPADES' || card[0].suit == 'CLUBS')
      ) {
        this.dialog.open(DialogSuccess, {
          width: '250px',
          enterAnimationDuration,
          exitAnimationDuration,
          data: { showFirstButton: true },
        });
      } else if (
        color == 'red' &&
        (card[0].suit == 'HEARTS' || card[0].suit == 'DIAMOND')
      ) {
        this.dialog.open(DialogSuccess, {
          width: '250px',
          enterAnimationDuration,
          exitAnimationDuration,
          data: { showFirstButton: true },
        });
      } else {
        this.dialog.open(DialogFailure, {
          width: '250px',
          enterAnimationDuration,
          exitAnimationDuration,
        });
      }
    });
  }
}
