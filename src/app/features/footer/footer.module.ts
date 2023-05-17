import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './container/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, MatIconModule, MatMenuModule, MatToolbarModule],
  exports: [FooterComponent],
  providers: [],
})
export class FooterModule {}
