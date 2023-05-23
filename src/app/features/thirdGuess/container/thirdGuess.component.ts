import { Component } from '@angular/core';
import { DrawDeckModel } from 'src/app/models/drawDeck.model';
import { cardService } from 'src/app/services/card.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogSuccess } from '../../../dialog/dialogSuccess/dialogSuccess.component';
import { DialogFailure } from 'src/app/dialog/dialogFailure/dialogFailure.component';
import { CardModel } from 'src/app/models/card.model';

@Component({
  selector: 'app-thirdGuess',
  templateUrl: './thirdGuess.component.html',
  styleUrls: ['./thirdGuess.component.css'],
})
export class ThirdGuessComponent {
  currentDeck: DrawDeckModel;
  heart: string = 'HEARTS';
  diamond: string = 'DIAMONDS';
  spade: string = 'SPADES';
  club: string = 'CLUBS';

  constructor(
    private cardService: cardService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cardService.getCurrentDeck().subscribe((res: DrawDeckModel) => {
      this.currentDeck = res;
    });
  }

  btnClick(suit: string) {
    let new_card: CardModel[] = [];
    let enterAnimationDuration: string = '3000ms';
    let exitAnimationDuration: string = '1500ms';

    this.cardService.drawCard(this.currentDeck.deck_id).subscribe((data) => {
      new_card = data.cards;
      if (new_card[0].suit == suit) {
        this.router.navigate(['/congratulation']);
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
