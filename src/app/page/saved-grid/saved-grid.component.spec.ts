import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedGridComponent } from './saved-grid.component';

describe('SavedGridComponent', () => {
  let component: SavedGridComponent;
  let fixture: ComponentFixture<SavedGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
