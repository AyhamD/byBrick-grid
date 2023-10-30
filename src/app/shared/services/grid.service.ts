import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { grid, gridList } from '../interface/grid.interface';

@Injectable({
  providedIn: 'root'
})
export class GridService {
  private dataSubject = new BehaviorSubject<gridList[]>([]);
  public data$ = this.dataSubject.asObservable();

  constructor() { }

  setData(newData: gridList[]) {
    this.dataSubject.next(newData);
  }
}
