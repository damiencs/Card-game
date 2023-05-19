import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondGuessComponent } from './container/secondGuess.component';

const routes: Routes = [
  {
    path: '',
    component: SecondGuessComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecondGuessRoutingModule {}
