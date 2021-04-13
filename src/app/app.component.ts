import { Component } from '@angular/core';
import { Formone } from './shared/interfaces/formone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public buttomValidate:boolean= false;
  public currentPosition:number = 0;
  public formOneData:Formone = {
    name:'',
    lastName:''
  };

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
