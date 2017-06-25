//our root app component
import { Component, NgModule, VERSION } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'sort',
  template: `<div>
    <div>Write a merge sort</div>
    <div>
        <div>{{unsorted}}</div>
        <div>{{sorted}}</div>
    </div>
</div>
  `
})
export class ExerciseFour {
  unsorted : number[] = [ 17, 2, 7, 4567, 34, 345, 7, 9, 23, 34, 78, 89 ];
  sorted : number[] = this.mergeSort(this.unsorted);

  constructor() {
  }

  public mergeSort<T>(x : T[]) : T[] {
    if (x.length < 2) {
      return x;
    } else {
      let middle = Math.round(x.length / 2);
      return this.merge(this.mergeSort(x.slice(0, middle)), this.mergeSort(x.slice(middle, x.length)));
    }
  }

  public merge<T>(a : T[], b : T[]) : T[] {
    if (!a.length) return b
    else if (!b.length) return a
    else if (a[ 0 ] < b[ 0 ]) {
      let [ head, ...tail ] : T[] = a;
      return [ head ].concat(this.merge(tail, b));
    } else {
      let [ head, ...tail ] : T[] = b;
      return [ head ].concat(this.merge(tail, a));
    }
  }
}
