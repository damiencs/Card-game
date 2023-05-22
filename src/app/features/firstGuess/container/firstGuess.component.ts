import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { cardService } from 'src/app/services/card.service';
import { DeckModel } from 'src/app/models/deck.model';
import { DrawDeckModel } from 'src/app/models/drawDeck.model';
import { CardModel } from 'src/app/models/card.model';
import { MatDialog, MatDialogRef, } from '@angular/material/dialog';
import { DialogSuccess } from './dialog/dialog.component';

@Component({
  selector: 'app-firstGuess',
  templateUrl: './firstGuess.component.html',
  styleUrls: ['./firstGuess.component.css'],
})
export class FirstGuessComponent {
  deckObj: DeckModel;

  constructor(private router: Router, private cardService:cardService, private dialog:MatDialog) {
    this.cardService.getDeck().subscribe(data=>{
      this.deckObj = data;
      console.log(this.deckObj);
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

  btnClick(color:string) {
    let card:CardModel[] = [];
    let enterAnimationDuration:string = "3000ms";
    let exitAnimationDuration:string = "1500ms";

    this.cardService.drawCard(this.deckObj.deck_id).subscribe(data=>{
      card = data.cards;
      console.log(card[0].suit=="SPADES");
      if(color == "black"&&(card[0].suit == "SPADES"|| card[0].suit == "CLUBS")){
        this.dialog.open(DialogSuccess, {
          width: '250px',
          enterAnimationDuration,
          exitAnimationDuration,
        });
      }else if(color == "red"&&(card[0].suit == "HEARTS"|| card[0].suit == "DIAMOND")){
        this.dialog.open(DialogSuccess, {
          width: '250px',
          enterAnimationDuration,
          exitAnimationDuration,
        });
      }else{
        this.dialog.open(DialogSuccess, {
          width: '250px',
          enterAnimationDuration,
          exitAnimationDuration,
        });
      }
    });

    
  }
}

