import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { grid,gridList } from 'src/app/shared/interface/grid.interface';
import { GridService } from 'src/app/shared/services/grid.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit, OnChanges {
  @Input() numRows!: number;
  @Input() numCols!: number;
  @Input() showCreatedGrid!: boolean;

  grid: grid[][] = [];

  nawGridForm: FormGroup = this.fb.group({
    gridName: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private gridService:GridService) {}
  
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['showCreatedGrid'].currentValue){
      this.initializeGrid();
    }
  }

  initializeGrid(): void {
    this.grid = [];
    let count = 1;
    for (let i = 0; i < this.numRows; i++) {
      this.grid[i] = [];
      for (let j = 0; j < this.numCols; j++) {
        this.grid[i][j] = { value: count++, status: 'nothing' };;
      }
    }
  }

  cellClicked(cell: grid): void {
    cell.status = this.toggleStatus(cell.status)
  }

  saveGrid(){
    const gridName = this.nawGridForm.get('gridName')?.value
    const grid: grid[][] = this.grid;

    const gridListItem: gridList = {
      grid: grid,
      gridName: gridName
    };
  
    this.gridService.gridList.push(gridListItem);
    this.gridService.createGrid(this.gridService.gridList)
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
