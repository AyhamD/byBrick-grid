import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { gridList } from '../interface/grid.interface';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GridService {
  private dataSubject = new BehaviorSubject<gridList[]>([]);
  public data$ = this.dataSubject.asObservable();

  private baseUrl = environment.url;

  gridList: gridList[] = [];
  

  constructor(private http: HttpClient, private snackBar: MatSnackBar,) { 
    this.getGridList()
  }

  getGridList() {
    this.http.get(`${this.baseUrl}/GetGridList`).pipe(take(1)).subscribe((response)=>{
      const value = response as gridList[]
      const grids = value.map((grid) => ({
        ...grid,
        grid: JSON.parse(grid.grid as unknown as string)
      }));
      this.dataSubject.next(grids)
      } 
    );
  }

  createGrid(grid:gridList[]) {
    this.http.post(`${this.baseUrl}/AddGrid`, grid).subscribe({
      next: () => {
        this.snackBar.open('Grid created', 'Close');
        this.getGridList()
      },
      error: (error) => {
        console.error('Error creating grid:', error);
        this.snackBar.open('Failed to create grid', 'Close', { panelClass: 'error-snackbar' });
      }
    });
  }

  updateGrid(id: string | undefined, data: gridList) {
    this.http.put(`${this.baseUrl}/UpdateGrid/${id}`, data).subscribe({
      next: () => {
        this.snackBar.open('Grid updated', 'Close');
      },
      error: (error) => {
        console.error('Error updating grid:', error);
        this.snackBar.open('Failed to update grid', 'Close', { panelClass: 'error-snackbar' });
      }
    });
  }

  deleteGrid(id: string | undefined) {
    return this.http.delete(`${this.baseUrl}/DeleteGrid/${id}`).subscribe({
      next: () => {
        this.snackBar.open('Grid deleted', 'Close');
      },
      error: (error) => {
        console.error('Error deleting grid:', error);
        this.snackBar.open('Failed to delete grid', 'Close', { panelClass: 'error-snackbar' });
      }
    });
  }
}
