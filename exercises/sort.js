"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//our root app component
var core_1 = require("@angular/core");
var ExerciseFour = (function () {
    function ExerciseFour() {
        this.unsorted = [17, 2, 7, 4567, 34, 345, 7, 9, 23, 34, 78, 89];
        this.sorted = this.mergeSort(this.unsorted);
    }
    ExerciseFour.prototype.mergeSort = function (x) {
        if (x.length < 2) {
            return x;
        }
        else {
            var middle = Math.round(x.length / 2);
            return this.merge(this.mergeSort(x.slice(0, middle)), this.mergeSort(x.slice(middle, x.length)));
        }
    };
    ExerciseFour.prototype.merge = function (a, b) {
        if (!a.length)
            return b;
        else if (!b.length)
            return a;
        else if (a[0] < b[0]) {
            var head = a[0], tail = a.slice(1);
            return [head].concat(this.merge(tail, b));
        }
        else {
            var head = b[0], tail = b.slice(1);
            return [head].concat(this.merge(tail, a));
        }
    };
    return ExerciseFour;
}());
ExerciseFour = __decorate([
    core_1.Component({
        selector: 'sort',
        template: "<div>\n    <div>Write a merge sort</div>\n    <div>\n        <div>unsorted:</div>\n        <div>{{unsorted}}</div>\n        <div>sorted</div>\n        <div>{{sorted}}</div>\n    </div>\n</div>\n  "
    })
], ExerciseFour);
exports.ExerciseFour = ExerciseFour;
