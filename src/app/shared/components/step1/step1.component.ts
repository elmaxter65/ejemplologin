import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Formone } from '../../interfaces/formone';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {

  public formTest: FormGroup;
  @Output() saveForm: EventEmitter<[boolean,Formone]> = new EventEmitter<[boolean,Formone]>();
  @Input() formParent:Formone;

  constructor() { }

  ngOnChanges(): void {
    if(this.formTest != undefined){
      this.saveForm.emit([this.formTest.valid,this.formTest.getRawValue()]);
    }  
  }

  ngOnInit(): void {
    this.formTest = new FormGroup({
      name: new FormControl(this.formParent.name,[Validators.required, Validators.minLength(2), Validators.maxLength(15)]),
      lastName: new FormControl(this.formParent.lastName,[Validators.required, Validators.minLength(2), Validators.maxLength(15)])
    });

    this.formTest.valueChanges.subscribe(resp=>{
      this.saveForm.emit([this.formTest.valid,this.formTest.getRawValue()]);
    });
  }

}
