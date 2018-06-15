import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorResultDisplayComponent } from './calculator-result-display.component';

describe('CalculatorResultDisplayComponent', () => {
  let component: CalculatorResultDisplayComponent;
  let fixture: ComponentFixture<CalculatorResultDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorResultDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorResultDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
