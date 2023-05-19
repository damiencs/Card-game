import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThirdGuessComponent } from './container/thirdGuess.component';

const routes: Routes = [
  {
    path: '',
    component: ThirdGuessComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThirdGuessRoutingModule {}
