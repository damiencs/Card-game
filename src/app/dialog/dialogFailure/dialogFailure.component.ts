import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { Router } from "@angular/router";

@Component({
    selector: 'dialogFailure',
    templateUrl: 'dialogFailure.component.html',
  })
  export class DialogFailure {
    constructor(public dialogRef: MatDialogRef<DialogFailure>, private router:Router) {}

    restartGame(){
      const parentURL = this.router.url.split('/')[0];
      this.dialogRef.close();
      this.router.navigate([parentURL]);
    }
  }