import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BodyComponent } from './container/body.component';

@NgModule({
  declarations: [BodyComponent],
  imports: [CommonModule],
  exports: [BodyComponent],
  providers: [],
})
export class BodyModule {}
