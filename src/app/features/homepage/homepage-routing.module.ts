import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './container/homepage.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../body/body.module').then((m) => m.BodyModule),
      },
      {
        path: 'first',
        loadChildren: () =>
          import('../firstGuess/firstGuess.module').then(
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
export class HomepageRoutingModule {}
