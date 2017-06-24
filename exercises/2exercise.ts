//our root app component
import { Component, NgModule, VERSION } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'fibTwo',
  template: `<div>
    <div>Write a Fibonacci generator</div>
    <div>
        <div *ngFor="let fib of fibs; index as i">
            <div>fib({{i}}) = {{fib}}</div>
        </div>
    </div>
</div>
  `
})
export class ExerciseTwo {

  fibs : number[] = [];

  constructor() {

    // TODO write a fib generator that generates fib numbers
    // If a max param is given, only generate fib numbers small than the max
    function* fib(max? : number) : IterableIterator<number> {
      let a : number = 0, b = 1;
      while (!max || a <= max) {
        // generators use the yield keyword
        yield a;
        [ a, b ] = [ b, a + b ];
      }
    }

    // Combine all results into a array
    this.fibs = Array.from(fib(100)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]

  }
}
