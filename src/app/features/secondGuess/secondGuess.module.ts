import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SecondGuessComponent } from './container/secondGuess.component';
import { SecondGuessRoutingModule } from './secondGuess-routing.module';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SecondGuessComponent],
  imports: [
    CommonModule,
    SecondGuessRoutingModule,
    MatRippleModule,
    MatDialogModule,
    MatButtonModule,
    SharedModule,
  ],
  exports: [SecondGuessComponent],
  providers: [],
})
export class SecondGuessModule {}
