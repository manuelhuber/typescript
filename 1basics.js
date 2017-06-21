"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Basics = (function () {
    function Basics() {
        this.classLevelProperty = 'Access me with "this.classLevelProperty"';
    }
    Basics.prototype.basicTypes = function () {
        // For variables, use keyword "let" or "const"
        var myString = 'Something';
        myString = 'something else';
        var truth = true;
        // numbers for ALL types of numbers
        var count = 1;
        var pi = 3.14;
        var myHex = 0xf00d;
        var mySum = count + pi;
        // the default value in JS (and therefore TS) for everything without a value
        var myOtherValue = undefined;
        console.log(myOtherValue.someProperty); // undefined error
        var myValue = null;
    };
    Basics.prototype.moreBasicTypes = function () {
        // Arrays
        var myArray = [1, 2, 3];
        // Touples
        var myTouple = ["John", 24];
        console.log(myTouple[0]); // prints the first value
        console.log(myTouple[1]); // prints the second value
        // Enum
        var Weather;
        (function (Weather) {
            Weather[Weather["Rainy"] = 0] = "Rainy";
            Weather[Weather["Sunny"] = 1] = "Sunny";
            Weather[Weather["Cloudy"] = 2] = "Cloudy";
        })(Weather || (Weather = {}));
        var bestWeather = Weather.Sunny;
        // If you don't know the type use 'any'
        var yourHopesAndDreams = {
            hope: bestWeather,
            dreams: 'yes'
        };
        yourHopesAndDreams = 1000000000;
        yourHopesAndDreams = true;
        yourHopesAndDreams = 'whatever you want';
    };
    Basics.prototype.objects = function () {
        // Generate a new object
        var emptyObject = {};
        var crazyObject = {
            randomProperty: 'value',
            someNumber: 1,
            aFunction: function (a, b) { return a + b; },
            evenMore: false
        };
        crazyObject['randomProperty'] = 'new value';
        crazyObject.randomProperty = 'newer value';
        crazyObject['newProperty'] = 'something else';
        console.log(crazyObject.aFunction(1, 2));
        // Create an object that conforms to an interface
        // If you miss a property from the interface the compiler (and any good IDE) will show you an error
        var myFancyObject = {
            someProperty: 'with a value',
            aSecondProperty: false,
            multiplyFunction: function (a, b) { return a * b; }
        };
        var result = myFancyObject.multiplyFunction(2, 3);
    };
    Basics.prototype.maps = function () {
        var myMap = {};
        var myKey = 'foobar';
        myMap[myKey] = 42;
        myMap['string literal'] = 100;
        // ES6 Syntax - not available when compiling to ES5
        // let myMap : Map<string, number> = new Map<string,number>();
    };
    Basics.prototype.TruthyAndFalsy = function () {
        // Thruthy and Falsy values are values that are interpreted as false or true
        // Empty strings and the number 0 are considered falsy
        var falsy = [false, '', 0, NaN, null, undefined];
        // Empty array and empty object are truthy
        var truthy = [true, 'a', 1, 548923, [], {}];
        // this is often used for null/undefined checks
        var myObject;
        if (myObject && myObject.myProperty === 'whatever') {
            console.log('"myObject" will be interpreted as a false and therefore "myObject.myProperty" wont be ' +
                'evaluated and we dont get a undefined error.');
        }
        // truthy / falsy values can be made explicit boolean value by the negate operator
        var myFalsy = 0;
        var myRealFalse = !!myFalsy;
    };
    return Basics;
}());
exports.Basics = Basics;
