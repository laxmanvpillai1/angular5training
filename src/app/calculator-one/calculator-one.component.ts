import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { CalculatorModel } from '../shared/calculator.model';

@Component({
  selector: 'app-calculator-one',
  templateUrl: './calculator-one.component.html',
  styleUrls: ['./calculator-one.component.css']
})
export class CalculatorOneComponent implements  DoCheck {

  public resultStyle;
  model: CalculatorModel = new CalculatorModel();

  constructor() { }

  

  ngDoCheck(){
    
  }

  

}
