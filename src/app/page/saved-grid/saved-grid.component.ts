import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from 'src/app/shared/component/confirm-dialog/confirm-dialog.component';
import { grid, gridList } from 'src/app/shared/interface/grid.interface';
import { GridService } from 'src/app/shared/services/grid.service';

@Component({
  selector: 'app-saved-grid',
  templateUrl: './saved-grid.component.html',
  styleUrls: ['./saved-grid.component.scss']
})
export class SavedGridComponent implements OnInit {
  gridList!: gridList[];
  editGridStatus:boolean = false
  constructor(private gridService:GridService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.gridService.data$.subscribe((value) => {
      this.gridList = value;
    });
  }

  editGrid(){
    this.editGridStatus = !this.editGridStatus;
  }

  deleteGrid(){
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      height: '400px',
      data: { header:'Delete grid', content: 'Are you sure you want to delete the grid?' }
    });
  }

  updateGrid(){
    this.gridService.setData(this.gridList);
    this.editGridStatus = false;
  }

  cellClicked(cell: grid): void {
    if(this.editGridStatus){
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

}
