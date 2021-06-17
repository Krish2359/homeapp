import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'home'

  firstNo: string = "";
  secondNo: string = "";
  result1: any;
  result2: any;
  result3: any;
  result4: any;


  Add() {
    this.result1 = parseInt(this.firstNo) + parseInt(this.secondNo)
  }

  Sub() {
    this.result2 = parseInt(this.firstNo) - parseInt(this.secondNo)
  }

  Mul() {
    this.result3 = parseInt(this.firstNo) * parseInt(this.secondNo)
  }

  Div() {
    this.result4 = parseInt(this.firstNo) / parseInt(this.secondNo)
  }

}
