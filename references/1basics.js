export class Basics {
    /**
     * strings, booleans, numbers
     */
    basicTypes() {
        // For variables, use keyword "let" or "const"
        let myString = 'Something';
        myString = 'something else';
        // Type are also interfered based on their initial value
        let type = 'inferred'; // type string is inferred
        // type = 10; <- type error
        let truth = true;
        // number for ALL types of numbers
        let count = 1;
        const pi = 3.14;
        let myHex = 0xf00d;
        let mySum = count + pi;
    }

    /**
     * undefined, null
     */
    undefinedAndNull() {
        // the default value for everything without a value is undefined
        let something;
        console.log(something); // undefined
        console.log(something.someProperty); // undefined error
        // Null is available to explicitly give something no value
        let myValue = null;
    }

    /**
     * Arrays, tuple, enums, any
     */
    moreBasicTypes() {
        // Arrays
        let myArray = [1, 2, 3];
        // Tuples
        let myTuple = ["John", 24];
        console.log(myTuple[0]); // "John"
        console.log(myTuple[1]); // 24
        // Enum
        var Weather;
        (function (Weather) {
            Weather[Weather["Rainy"] = 0] = "Rainy";
            Weather[Weather["Sunny"] = 1] = "Sunny";
            Weather[Weather["Cloudy"] = 2] = "Cloudy";
        })(Weather || (Weather = {}));
        const bestWeather = Weather.Sunny;
        // If you don't know the type use 'any'
        let yourHopesAndDreams = {
            hope: bestWeather,
            dreams: 'yes'
        };
        yourHopesAndDreams = 1000000000;
        yourHopesAndDreams = true;
        yourHopesAndDreams = 'whatever you want';
    }

    /**
     * objects
     */
    objects() {
        // Create a empty object
        let emptyObject = {};
        // this variable will become a property of the new object
        let aSecondProperty = 'with another value';
        // Properties can be inserted when creating the object
        let myFancyObject = {
            someProperty: 'with a value',
            aSecondProperty,
            multiplyFunction: (a, b) => a * b
        };
        // New properties can be added at will (if type of object is any)
        myFancyObject.newProperty = 'something else';
        // Bracket and dot sytnax are both valid ways to access a property
        console.log(myFancyObject['someProperty']); // 'with a value'
        console.log(myFancyObject.aSecondProperty); // 'with another value'
        console.log(myFancyObject.multiplyFunction(2, 3)); // 6
    }

    /**
     * maps
     */
    maps() {
        let myMap = {};
        let myKey = 'foobar';
        myMap[myKey] = 42;
        myMap['string literal'] = 100;
        // ES6 Syntax - not available when compiling to ES5
        // let myMapES6 : Map<string, number> = new Map<string, number>();
    }

    /**
     * truthy and falsy values
     */
    TruthyAndFalsy() {
        // Thruthy and Falsy values are values that are interpreted as false or true
        // Empty strings and the number 0 are considered falsy
        let falsy = [false, '', 0, NaN, null, undefined];
        // Empty array and empty object are truthy
        let truthy = [true, 'a', 1, 548923, [], {}];
        // this is often used for null/undefined checks
        let myObject;
        if (myObject && myObject.myProperty === 'whatever') {
            // myObject is defined and myProperty is a truthy value
        }
        // truthy / falsy values can be made explicit boolean value by the negate operator
        let myFalsy = 0;
        let myRealFalse = !!myFalsy;
    }
}
