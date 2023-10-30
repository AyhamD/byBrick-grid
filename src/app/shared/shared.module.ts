import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './component/header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { ConfirmDialogComponent } from './component/confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    HeaderComponent,
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    AppRoutingModule,
    MatButtonModule
  ],
  exports:[
    HeaderComponent,
    ConfirmDialogComponent
  ],
  entryComponents: [ConfirmDialogComponent]
})
export class SharedModule { }
