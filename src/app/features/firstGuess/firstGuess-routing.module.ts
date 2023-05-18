import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstGuessComponent } from './container/firstGuess.component';

const routes: Routes = [
  {
    path: '',
    component: FirstGuessComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstGuessRoutingModule {}
