import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ThirdGuessComponent } from './container/thirdGuess.component';
import { ThirdGuessRoutingModule } from './thirdGuess-routing.module';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ThirdGuessComponent],
  imports: [
    CommonModule,
    ThirdGuessRoutingModule,
    MatRippleModule,
    MatDialogModule,
    SharedModule,
  ],
  exports: [ThirdGuessComponent],
  providers: [],
})
export class ThirdGuessModule {}
