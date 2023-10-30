import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateGridComponent } from './page/create-grid/create-grid.component';
import { SavedGridComponent } from './page/saved-grid/saved-grid.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridComponent } from './page/create-grid/grid/grid.component';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    CreateGridComponent,
    SavedGridComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    ReactiveFormsModule,
    SharedModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MatSnackBarModule,
    MatFormFieldModule,
    HttpClientModule,
    MatIconModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
