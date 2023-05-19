import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './features/homepage/container/homepage.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/body/body.module').then((m) => m.BodyModule),
      },
      {
        path: 'first',
        loadChildren: () =>
          import('./features/firstGuess/firstGuess.module').then(
            (m) => m.FirstGuessModule
          ),
      },
      {
        path: 'second',
        loadChildren: () =>
          import('./features/secondGuess/secondGuess.module').then(
            (m) => m.SecondGuessModule
          ),
      },
      {
        path: 'third',
        loadChildren: () =>
          import('./features/thirdGuess/thirdGuess.module').then(
            (m) => m.ThirdGuessModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
