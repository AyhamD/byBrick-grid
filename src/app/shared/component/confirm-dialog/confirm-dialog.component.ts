import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ConfirmDialogComponent>,
     @Inject(MAT_DIALOG_DATA) public data: 
  {header:string, content:string}) { }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close()
  }

  confirm(){
    this.dialogRef.close('confirm')
  }
}
