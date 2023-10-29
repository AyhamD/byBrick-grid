import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateGridComponent } from './page/create-grid/create-grid.component';
import { SavedGridComponent } from './page/saved-grid/saved-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateGridComponent,
    SavedGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
