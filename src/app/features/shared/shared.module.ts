
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogSuccess } from 'src/app/dialog/dialogSuccess/dialogSuccess.component';
import { DialogFailure } from 'src/app/dialog/dialogFailure/dialogFailure.component';

@NgModule({
  declarations: [DialogSuccess,DialogFailure],
  imports: [CommonModule, MatDialogModule],
  exports: [DialogSuccess,DialogFailure],
})
export class SharedModule {}
