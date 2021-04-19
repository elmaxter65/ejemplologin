import { Component } from '@angular/core';
import { Formone } from './shared/interfaces/formone';
import { NgxSpinnerService } from 'ngx-spinner';
import { TranslateService } from '@ngx-translate/core';

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
  constructor(private spinner: NgxSpinnerService,private translate: TranslateService) {
    translate.setDefaultLang('en');
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
