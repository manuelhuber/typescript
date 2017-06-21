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
        count++;
        ++count;
        var pi = 3.14;
        var myHex = 0xf00d;
        var mySum = count + pi;
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
        // Maps
        var myMap = {};
        var myKey = 'foobar';
        myMap[myKey] = 42;
        myMap['string literal'] = 100;
        // ES6 Syntax - not available when compiling to ES5
        // let myMap : Map<string, number> = new Map<string,number>();
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
    /**
     * Access me with this.addFucntion
     * @param x the first number
     * @param y the second number
     * @return {number} the sum of the given numbers
     */
    Basics.prototype.addFunction = function (x, y) {
        return x + y;
    };
    return Basics;
}());
exports.Basics = Basics;
