import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-grid',
  templateUrl: './create-grid.component.html',
  styleUrls: ['./create-grid.component.scss']
})
export class CreateGridComponent implements OnInit {
  gridForm: FormGroup
  constructor(private formBuilder: FormBuilder){ 
    this.gridForm = this.formBuilder.group({
      cols: ['5', Validators.required],
      rows: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

}
