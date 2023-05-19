import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SecondGuessComponent } from './container/secondGuess.component';
import { SecondGuessRoutingModule } from './secondGuess-routing.module';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [SecondGuessComponent],
  imports: [
    CommonModule,
    SecondGuessRoutingModule,
    MatRippleModule,
    MatDialogModule,
  ],
  exports: [SecondGuessComponent],
  providers: [],
})
export class SecondGuessModule {}
