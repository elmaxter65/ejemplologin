import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Formone } from '../shared/interfaces/formone';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public buttomValidate:boolean= false;
  public currentPosition:number = 0;
  public formOneData:Formone = {
    name:'',
    lastName:''
  };
  constructor(private spinner: NgxSpinnerService) {
  }
  
  ngOnInit() {
    this.spinner.show();
 
    setTimeout(() => {
        this.spinner.hide();
    }, 5000);
  }

  public nextStep():void{
    this.currentPosition++;
  }
  public previousStep():void{
    this.currentPosition--;
  }

  getEmmitStepOneComponent(formState:[boolean,Formone]){
    this.buttomValidate = formState[0];
    this.formOneData = formState[1];
  }

}
