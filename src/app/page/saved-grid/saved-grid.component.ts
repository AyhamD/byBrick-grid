import { Component, OnDestroy, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ConfirmDialogComponent } from 'src/app/shared/component/confirm-dialog/confirm-dialog.component';
import { grid, gridList } from 'src/app/shared/interface/grid.interface';
import { GridService } from 'src/app/shared/services/grid.service';

@Component({
  selector: 'app-saved-grid',
  templateUrl: './saved-grid.component.html',
  styleUrls: ['./saved-grid.component.scss']
})
export class SavedGridComponent implements OnInit, OnDestroy {
  gridList!: gridList[];
  editGridStatus:boolean[] = []
  getSubscription!: Subscription;
  dialogSubscription!: Subscription;
  constructor(private gridService:GridService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getSubscription = this.gridService.data$.subscribe((value) => {
      console.log(value)
      this.gridList = value;
      this.editGridStatus = this.gridList.map(()=> false)
    });
  }

  editGrid(index:number){
    this.editGridStatus[index] = !this.editGridStatus[index];
  }

  deleteGrid(index:number, id:string | undefined){
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: { header:'Delete grid', content: 'Are you sure you want to delete the grid?' }
    });

    this.dialogSubscription = dialogRef.afterClosed().subscribe(data=>{
      if(data === 'confirm'){
        this.gridList.splice(index,1) 
        this.gridService.deleteGrid(id)
      }
    })
  }

  updateGrid(index:number, id:string | undefined){
    this.editGridStatus[index] = false;
    this.gridService.updateGrid(id, this.gridList[index])
  }

  cellClicked(cell: grid, index:number): void {
    if(this.editGridStatus[index]){
      cell.status = this.toggleStatus(cell.status)
    }
  }

  private toggleStatus(status: string): string {
    switch (status) {
      case 'nothing':
        return 'ok';
      case 'ok':
        return 'warning';
      case 'warning':
        return 'error';
      case 'error':
        return 'nothing';
      default:
        return 'nothing';
    }
  }

  ngOnDestroy(): void {
    this.getSubscription.unsubscribe();
    this.dialogSubscription.unsubscribe();
  }

}
