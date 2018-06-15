import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-calculator-result-display',
  templateUrl: './calculator-result-display.component.html',
  styleUrls: ['./calculator-result-display.component.css']
})
export class CalculatorResultDisplayComponent implements OnChanges {

  constructor() { }

  @Input()
    data: number = 0;

    resultStyle = this.resultStyle = {positive: this.data>=0, negative: this.data<0};

  ngOnChanges() {
    this.resultStyle = this.resultStyle = {positive: this.data>=0, negative: this.data<0};
  }

}
