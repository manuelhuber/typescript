var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Functions = (function () {
    function Functions() {
    }
    Functions.prototype.functionSyntax = function () {
        // Without typing for now
        var myFunction = function (a, b) {
            return a + b;
        };
        var myLambda = function (a, b) { return a + b; };
        var myLambdaWithBody = function (a, b) {
            return a + b;
        };
        function otherFunction(a, b) {
            return a + b;
        }
        console.log(myFunction(1, 2));
        console.log(myLambda(1, 2));
        console.log(myLambdaWithBody(1, 2));
        console.log(otherFunction(1, 2));
        // immediatly invoking function
        (function (a) {
            console.log(a);
        })('foo');
        // also with arrow syntax
        (function (a) { return console.log(a); })('bar');
    };
    Functions.prototype.functionTyping = function () {
        // The variable "myAddFullyTyped" is typed and the value ( = the function) is also fully typed
        var myAddFullyTyped = function (x, y) { return x + y; };
        // The compiler knows the types of x & y based on the typing of "myAdd"
        var myAdd = function (x, y) { return x + y; };
        // The compiler knows the type of "myAdd2" based on the typing of it's value
        var myAdd2 = function (x, y) { return x + y; };
        // let foo : string = myAdd2(1, 2); <- error, since the compiler knows myAdd2 will return a number
    };
    Functions.prototype.unknownNumberOfParameters = function () {
        var fullName = function (doctor, firstName) {
            var lastNames = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                lastNames[_i - 2] = arguments[_i];
            }
            return doctor ? 'Dr. ' : '' + firstName + ' ' + lastNames.join(' ');
        };
        console.log(fullName(false, "John", "Doe", "Springer", "Smith")); // "John Doe Springer Smith"
        console.log(fullName(true, "Doom")); // "Dr. Doom"
    };
    Functions.prototype.optionalParameters = function () {
        // Optional parameters are marked with "?"
        var sayHello = function (name) {
            if (name) {
                console.log('Hello ' + name);
            }
            else {
                console.log('Howdy Stranger!');
            }
        };
        // Both valid
        console.log(sayHello("John")); // Hello John
        console.log(sayHello()); // Howdy Stranger
        // Default values can be specified in the parameters of a function
        var increment = function (base, increment) {
            if (increment === void 0) { increment = 1; }
            return base + increment;
        };
        console.log(increment(3)); // 4
        console.log(increment(3, 2)); // 5
    };
    // only available with ES6
    Functions.prototype.lazyIterators = function () {
        function fib(max) {
            var a, b, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        a = 0, b = 1;
                        _b.label = 1;
                    case 1:
                        if (!(!max || a + b < max)) return [3 /*break*/, 3];
                        return [4 /*yield*/, a + b];
                    case 2:
                        _b.sent();
                        _a = [b, a + b], a = _a[0], b = _a[1];
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/];
                }
            });
        }
        var fibNumbers = fib();
        console.log(fibNumbers.next()); // {value: 1, done: false}
        console.log(fibNumbers.next()); // {value: 2, done: false}
        console.log(fibNumbers.next()); // {value: 3, done: false}
        console.log(fibNumbers.next()); // {value: 5, done: false}
        console.log(fibNumbers.next()); // {value: 8, done: false}
        console.log(fibNumbers.next()); // {value: 13, done: false}
        console.log(Array.from(fib(100))); // [1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
        for (var _i = 0, _a = fib(50); _i < _a.length; _i++) {
            var num = _a[_i];
            console.log(num); // 1, 2, 3, 5, 8, 13, 21, 34
        }
        var iterator = this.iteratorWithLimit(10);
        console.log(iterator.next()); // {value: 10, done: false}
        console.log(iterator.next()); // {value: 11, done: false}
        console.log(iterator.next()); // {value: undefined, done: true}
    };
    // Class level iterator
    Functions.prototype.iteratorWithLimit = function (count) {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(count < 12)) return [3 /*break*/, 2];
                    return [4 /*yield*/, count++];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 0];
                case 2: return [2 /*return*/];
            }
        });
    };
    Functions.prototype.promises = function () {
        var promise = new Promise(function (resolve, reject) {
            resolve('foo');
        });
    };
    return Functions;
}());
