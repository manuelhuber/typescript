"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Basics = (function () {
    function Basics() {
    }
    /**
     * strings, booleans, numbers
     */
    Basics.prototype.basicTypes = function () {
        // For variables, use keyword "let" or "const"
        var myString = 'Something';
        myString = 'something else';
        // Type are also interfered based on their initial value
        var type = 'inferred'; // type string is inferred
        // type = 10; <- type error
        var truth = true;
        // numbers for ALL types of numbers
        var count = 1;
        var pi = 3.14;
        var myHex = 0xf00d;
        var mySum = count + pi;
    };
    /**
     * undefined, null
     */
    Basics.prototype.undefinedAndNull = function () {
        // the default value for everything without a value is undefined
        var something;
        console.log(something); // undefined
        console.log(something.someProperty); // undefined error
        // Null is available to explicitly give something no value
        var myValue = null;
    };
    /**
     * Arrays, tuple, enums, any
     */
    Basics.prototype.moreBasicTypes = function () {
        // Arrays
        var myArray = [1, 2, 3];
        // Tuples
        var myTuple = ["John", 24];
        console.log(myTuple[0]); // "John"
        console.log(myTuple[1]); // 24
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
    /**
     * objects
     */
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
        var aSecondProperty = false;
        var myFancyObject = {
            someProperty: 'with a value',
            aSecondProperty: aSecondProperty,
            multiplyFunction: function (a, b) { return a * b; }
        };
        console.log(myFancyObject.multiplyFunction(2, 3)); // 6
        console.log(myFancyObject.someProperty); // 'with a value'
        console.log(myFancyObject.aSecondProperty); // 'false'
    };
    /**
     * maps
     */
    Basics.prototype.maps = function () {
        var myMap = {};
        var myKey = 'foobar';
        myMap[myKey] = 42;
        myMap['string literal'] = 100;
        // ES6 Syntax - not available when compiling to ES5
        // let myMap : Map<string, number> = new Map<string,number>();
    };
    /**
     * truthy and falsy values
     */
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