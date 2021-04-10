import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemplologin';
  public currentPosition:number = 0;

  public nextStep():void{
    this.currentPosition++;
  }
  public previousStep():void{
    this.currentPosition--;
  }
}
