import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialog,
} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'dialogSuccess',
  templateUrl: 'dialogSuccess.component.html',
  styleUrls: ['./dialogSuccess.component.css'],
})
export class DialogSuccess {
  isFirstOpened: boolean;
  constructor(
    public dialogRef: MatDialogRef<DialogSuccess>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  routeToSecondPage() {
    this.router.navigate(['/second']);
  }

  routeToThirdPage() {
    this.router.navigate(['/third']);
  }

  restartGame() {
    const parentURL = this.router.url.split('/')[0];
    this.dialogRef.close();
    this.router.navigate([parentURL]);
  }
}
