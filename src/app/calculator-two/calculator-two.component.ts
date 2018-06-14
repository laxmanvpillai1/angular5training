import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator-two',
  templateUrl: './calculator-two.component.html',
  styleUrls: ['./calculator-two.component.css']
})
export class CalculatorTwoComponent implements OnInit {

  public result: number = 0;

  constructor() { }

  ngOnInit() {
  }

  onClickCalculate(number1:number, number2:number, operation:string){
    

    if(operation==='add')
      this.result = number1*1+number2*1;
    else if(operation==='subtract')
      this.result = number1-number2;
    else if(operation==='multiply')
      this.result = number1*number2;
    else
      this.result = number1/number2;

    
  }

}
