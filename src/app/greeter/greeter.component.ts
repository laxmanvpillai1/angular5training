import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.css']
})
export class GreeterComponent implements OnInit {

  message: string = "[Dummy Greeting Message]"

  constructor() { }

  ngOnInit() {
  }

  newGreetMessage(greeterName:string){
    this.message = `Hi ${greeterName}, Welcome to the Greeter`;
  }
}
