import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
    templateUrl: 'dialog.component.html',
  })
  export class DialogSuccess {
    constructor(public dialogRef: MatDialogRef<DialogSuccess>) {}
  }