import { Component, NgModule, VERSION } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'fibOne',
  template: `<div>
    <div>Write a recursive Fibonacci function. Make it tail recursive if you can.</div>
    <div>
        <div *ngFor="let fib of fibs; index as i">
            <div>fib({{i}}) = {{fib}}</div>
        </div>
    </div>
</div>
  `
})
export class ExerciseOne {

  fibs : number[] = [];

  constructor() {

    // TODO write fib function
    /** Make it tail recursive if possible - you will need to add parameter
     * but make them optional (or with default value) to make sure it's
     * still usable with 1 param
     */
    const fibonacci = (n : number, a = 1, b = 0) => n === 0 ? b : fibonacci(n - 1, a + b, a);

    for (let i = 0; i < 10; i++) {
      this.fibs.push(fibonacci(i));
    }
  }
}
