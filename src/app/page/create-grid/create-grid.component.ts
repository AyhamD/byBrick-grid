import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-grid',
  templateUrl: './create-grid.component.html',
  styleUrls: ['./create-grid.component.scss']
})
export class CreateGridComponent implements OnInit {
  gridForm: FormGroup
  showCreatedGrid:boolean = false;
  constructor(private formBuilder: FormBuilder){ 
    this.gridForm = this.formBuilder.group({
      cols: ['', Validators.required],
      rows: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  onlyNumber(event:KeyboardEvent){
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  createNewGrid(){
    this.showCreatedGrid = true;
  }
}
