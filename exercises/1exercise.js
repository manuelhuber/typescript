"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ExerciseOne = (function () {
    function ExerciseOne() {
        this.fibs = [];
        // TODO write fib function
        /** Make it tail recursive if possible - you will need to add parameter
         * but make them optional (or with default value) to make sure it's
         * still usable with 1 param
         */
        var fibonacci = function (n, a, b) {
            if (a === void 0) { a = 1; }
            if (b === void 0) { b = 0; }
            return n === 0 ? b : fibonacci(n - 1, a + b, a);
        };
        for (var i = 0; i < 10; i++) {
            this.fibs.push(fibonacci(i));
        }
    }
    return ExerciseOne;
}());
ExerciseOne = __decorate([
    core_1.Component({
        selector: 'fibOne',
        template: "<div>\n    <div>Write a recursive Fibonacci function. Make it tail recursive if you can.</div>\n    <div>\n        <div *ngFor=\"let fib of fibs; index as i\">\n            <div>fib({{i}}) = {{fib}}</div>\n        </div>\n    </div>\n</div>\n  "
    })
], ExerciseOne);
exports.ExerciseOne = ExerciseOne;
