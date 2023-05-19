import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '../homepage/container/homepage.component';

const homepageRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent
    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(homepageRoutes)],
  exports: [RouterModule],
})
export class HomepageRoutingModule {}
