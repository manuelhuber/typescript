"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
var __generator = (this && this.__generator) || function (thisArg, body) {
        var _ = {
            label: 0, sent: function () {
                if (t[0] & 1) throw t[1];
                return t[1];
            }, trys: [], ops: []
        }, f, y, t, g;
        return g = {
            next: verb(0),
            "throw": verb(1),
            "return": verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
            return this;
        }), g;
        function verb(n) {
            return function (v) {
                return step([n, v]);
            };
        }

        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [0, t.value];
                switch (op[0]) {
                    case 0:
                    case 1:
                        t = op;
                        break;
                    case 4:
                        _.label++;
                        return {value: op[1], done: false};
                    case 5:
                        _.label++;
                        y = op[1];
                        op = [0];
                        continue;
                    case 7:
                        op = _.ops.pop();
                        _.trys.pop();
                        continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                        }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                            _.label = op[1];
                            break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();
                        continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [6, e];
                y = 0;
            } finally {
                f = t = 0;
            }
            if (op[0] & 5) throw op[1];
            return {value: op[0] ? op[1] : void 0, done: true};
        }
    };
Object.defineProperty(exports, "__esModule", {value: true});
//our root app component
var core_1 = require("@angular/core");
var ExerciseTwo = (function () {
    function ExerciseTwo() {
        this.fibs = [];
        // TODO write a fib generator that generates fib numbers
        // If a max param is given, only generate fib numbers small than the max
        function fib(max) {
            var a, b, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        a = 0, b = 1;
                        _b.label = 1;
                    case 1:
                        if (!(!max || a <= max)) return [3 /*break*/, 3];
                        // generators use the yield keyword
                        return [4 /*yield*/, a];
                    case 2:
                        // generators use the yield keyword
                        _b.sent();
                        _a = [b, a + b], a = _a[0], b = _a[1];
                        return [3 /*break*/, 1];
                    case 3:
                        return [2 /*return*/];
                }
            });
        }

        // Combine all results into a array
        this.fibs = Array.from(fib(100)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
    }

    return ExerciseTwo;
}());
ExerciseTwo = __decorate([
    core_1.Component({
        selector: 'fibTwo',
        template: "<div>\n    <div>Write a Fibonacci generator</div>\n    <div>\n        <div *ngFor=\"let fib of fibs; index as i\">\n            <div>fib({{i}}) = {{fib}}</div>\n        </div>\n    </div>\n</div>\n  "
    })
], ExerciseTwo);
exports.ExerciseTwo = ExerciseTwo;
