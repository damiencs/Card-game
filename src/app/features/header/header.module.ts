import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './container/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MatIconModule, MatMenuModule, MatToolbarModule],
  exports: [HeaderComponent],
  providers: [],
})
export class HeaderModule {}
