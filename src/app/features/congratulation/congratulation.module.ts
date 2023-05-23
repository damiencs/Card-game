import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CongratulationComponent } from './container/congratulation.component';
import { CongratulationRoutingModule } from './congratulation-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CongratulationComponent],
  imports: [
    CommonModule,
    CongratulationRoutingModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  exports: [CongratulationComponent],
  providers: [],
})
export class CongratulationModule {}
