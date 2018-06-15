import { Component, OnInit, DoCheck } from '@angular/core';
import { CalculatorModel } from '../shared/calculator.model';

@Component({
  selector: 'app-calculator-two',
  templateUrl: './calculator-two.component.html',
  styleUrls: ['./calculator-two.component.css']
})
export class CalculatorTwoComponent implements DoCheck {

  operator: string = 'add';

  model: CalculatorModel = new CalculatorModel();

  constructor() { }

  ngDoCheck() {
    
  }

 
}
