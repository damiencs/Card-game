import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BodyRoutingModule } from './body-routing.module';
import { BodyComponent } from './container/body.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [BodyComponent],
  imports: [CommonModule, BodyRoutingModule, MatButtonModule],
  exports: [BodyComponent],
  providers: [],
})
export class BodyModule {}
