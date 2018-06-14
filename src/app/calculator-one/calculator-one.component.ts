import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator-one',
  templateUrl: './calculator-one.component.html',
  styleUrls: ['./calculator-one.component.css']
})
export class CalculatorOneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public result: number = 0;

  onClickAdd (number1:number, number2:number) {
    this.result =  number1*1 + number2*1;
  }

  onClickSubtract (number1:number, number2:number){
    this.result = number1 - number2;
  }

  onClickMultiply (number1: number, number2: number){
    this.result = number1*number2;
  }

  onClickDivide (number1:number, number2:number){
    this.result = number1/number2;
  }

}
