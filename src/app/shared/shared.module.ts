import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './component/header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { ConfirmDialogComponent } from './component/confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material';


@NgModule({
  declarations: [
    HeaderComponent,
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    AppRoutingModule,
  ],
  exports:[
    HeaderComponent,
    ConfirmDialogComponent
  ]
})
export class SharedModule { }
