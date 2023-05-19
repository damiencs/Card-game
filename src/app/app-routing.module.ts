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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
