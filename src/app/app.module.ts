import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { CalculatorOneComponent } from './calculator-one/calculator-one.component';
import { CalculatorTwoComponent } from './calculator-two/calculator-two.component';
import { CalculatorResultDisplayComponent } from './calculator-result-display/calculator-result-display.component';

@NgModule({
  declarations: [
    AppComponent,
    GreeterComponent,
    CalculatorOneComponent,
    CalculatorTwoComponent,
    CalculatorResultDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, GreeterComponent, CalculatorOneComponent, CalculatorTwoComponent]
})
export class AppModule { }
