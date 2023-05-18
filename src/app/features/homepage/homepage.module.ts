import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomepageComponent } from './container/homepage.component';
import { HomepageRoutingModule } from './homepage-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
  ],
  exports: [HomepageComponent],
  providers: [],
})
export class HomepageModule {}
