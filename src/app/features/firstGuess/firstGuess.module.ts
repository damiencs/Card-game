import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FirstGuessComponent } from './container/firstGuess.component';
import { FirstGuessRoutingModule } from './firstGuess-routing.module';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [FirstGuessComponent],
  imports: [
    CommonModule,
    FirstGuessRoutingModule,
    MatRippleModule,
    MatDialogModule,
    HttpClientModule,
  ],
  exports: [FirstGuessComponent],
  providers: [],
})
export class FirstGuessModule {}
