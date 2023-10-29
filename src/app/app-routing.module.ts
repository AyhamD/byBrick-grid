import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateGridComponent } from './page/create-grid/create-grid.component';
import { SavedGridComponent } from './page/saved-grid/saved-grid.component';

const routes: Routes = [
  { path: 'create', component: CreateGridComponent },
  { path: 'show', component: SavedGridComponent },
  { path: '', redirectTo: '/create', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
