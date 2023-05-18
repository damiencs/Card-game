import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FirstGuessComponent } from './container/firstGuess.component';
import { FirstGuessRoutingModule } from './firstGuess-routing.module';

@NgModule({
  declarations: [FirstGuessComponent],
  imports: [CommonModule, FirstGuessRoutingModule],
  exports: [FirstGuessComponent],
  providers: [],
})
export class FirstGuessModule {}
