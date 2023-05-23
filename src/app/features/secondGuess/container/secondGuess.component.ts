import { Component } from '@angular/core';
import { DrawDeckModel } from 'src/app/models/drawDeck.model';
import { cardService } from 'src/app/services/card.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogSuccess } from '../../../dialog/dialogSuccess/dialogSuccess.component';
import { DialogFailure } from 'src/app/dialog/dialogFailure/dialogFailure.component';
import { CardModel } from 'src/app/models/card.model';

@Component({
  selector: 'app-secondGuess',
  templateUrl: './secondGuess.component.html',
  styleUrls: ['./secondGuess.component.css'],
})
export class SecondGuessComponent {
  currentDeck: DrawDeckModel;
  firstCard: CardModel;
  higher: string = 'higher';
  lower: string = 'lower';
  equal: string = 'equal';
  constructor(private cardService: cardService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.cardService.getCurrentDeck().subscribe((res: DrawDeckModel) => {
      this.currentDeck = res;
      this.firstCard = this.currentDeck.cards[0];
    });
  }

  convertCardValue(value: string) {
    switch (value) {
      case 'ACE':
        return 14;
      case 'KING':
        return 13;
      case 'QUEEN':
        return 12;
      case 'JACK':
        return 11;
      default:
        return parseInt(value, 10);
    }
  }

  btnClick(answer: string) {
    let new_card: CardModel[] = [];
    let enterAnimationDuration: string = '3000ms';
    let exitAnimationDuration: string = '1500ms';

    this.cardService.drawCard(this.currentDeck.deck_id).subscribe((data) => {
      new_card = data.cards;
      if (answer == 'higher') {
        if (
          this.convertCardValue(new_card[0].value) >
          this.convertCardValue(this.firstCard.value)
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
      } else if (answer == 'lower') {
        if (
          this.convertCardValue(new_card[0].value) <
          this.convertCardValue(this.firstCard.value)
        ) {
          this.dialog.open(DialogSuccess, {
            width: '250px',
            enterAnimationDuration,
            exitAnimationDuration,
            data: { showFirstButton: false },
          });
        } else {
          this.dialog.open(DialogFailure, {
            width: '250px',
            enterAnimationDuration,
            exitAnimationDuration,
          });
        }
      } else if (answer == 'equal') {
        if (
          this.convertCardValue(new_card[0].value) ==
          this.convertCardValue(this.firstCard.value)
        ) {
          this.dialog.open(DialogSuccess, {
            width: '250px',
            enterAnimationDuration,
            exitAnimationDuration,
            data: { showFirstButton: false },
          });
        } else {
          this.dialog.open(DialogFailure, {
            width: '250px',
            enterAnimationDuration,
            exitAnimationDuration,
          });
        }
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
