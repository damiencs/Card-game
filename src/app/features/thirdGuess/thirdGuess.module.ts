import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ThirdGuessComponent } from './container/thirdGuess.component';
import { ThirdGuessRoutingModule } from './thirdGuess-routing.module';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [ThirdGuessComponent],
  imports: [
    CommonModule,
    ThirdGuessRoutingModule,
    MatRippleModule,
    MatDialogModule,
  ],
  exports: [ThirdGuessComponent],
  providers: [],
})
export class ThirdGuessModule {}
