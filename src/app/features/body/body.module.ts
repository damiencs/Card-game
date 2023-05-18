import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BodyComponent } from './container/body.component';
import { BodyRoutingModule } from './body-routing.module';

@NgModule({
  declarations: [BodyComponent],
  imports: [CommonModule, BodyRoutingModule],
  exports: [BodyComponent],
  providers: [],
})
export class BodyModule {}
