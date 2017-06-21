import { MyInterface } from './4classes';
export class Basics {

    /**
     * strings, booleans, numbers
     */
    public basicTypes() : void {
        // For variables, use keyword "let" or "const"
        let myString : string = 'Something';
        myString = 'something else';

        // Type are also interfered based on their initial value
        let type = 'inferred'; // type string is inferred
        // type = 10; <- type error

        let truth : boolean = true;

        // numbers for ALL types of numbers
        let count : number = 1;
        const pi : number = 3.14;
        let myHex : number = 0xf00d;
        let mySum : number = count + pi;
    }

    /**
     * undefined, null
     */
    public undefinedAndNull() : void {
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
    public moreBasicTypes() : void {
        // Arrays
        let myArray : number[] = [ 1, 2, 3 ];

        // Tuples
        let myTuple : [ string, number ] = [ "John", 24 ];
        console.log(myTuple[ 0 ]); // "John"
        console.log(myTuple[ 1 ]); // 24

        // Enum
        enum Weather {Rainy, Sunny, Cloudy}
        const bestWeather : Weather = Weather.Sunny;

        // If you don't know the type use 'any'
        let yourHopesAndDreams : any = {
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
    public objects() : void {
        // Generate a new object
        let emptyObject : any = {};
        let crazyObject : any = {
            randomProperty: 'value',
            someNumber: 1,
            aFunction: (a, b) => a + b,
            evenMore: false
        };
        crazyObject[ 'randomProperty' ] = 'new value';
        crazyObject.randomProperty = 'newer value';

        crazyObject[ 'newProperty' ] = 'something else';
        console.log(crazyObject.aFunction(1, 2));

        // Create an object that conforms to an interface
        // If you miss a property from the interface the compiler (and any good IDE) will show you an error
        let aSecondProperty : boolean = false;
        let myFancyObject : MyInterface = {
            someProperty: 'with a value',
            aSecondProperty,
            multiplyFunction: (a : number, b : number) => a * b
        };
        console.log(myFancyObject.multiplyFunction(2, 3)); // 6
        console.log(myFancyObject.someProperty); // 'with a value'
        console.log(myFancyObject.aSecondProperty); // 'false'

    }

    /**
     * maps
     */
    public maps() {
        let myMap : { [key : string] : number } = {};
        let myKey = 'foobar';
        myMap[ myKey ] = 42;
        myMap[ 'string literal' ] = 100;
        // ES6 Syntax - not available when compiling to ES5
        // let myMap : Map<string, number> = new Map<string,number>();
    }

    /**
     * truthy and falsy values
     */
    public TruthyAndFalsy() {
        // Thruthy and Falsy values are values that are interpreted as false or true

        // Empty strings and the number 0 are considered falsy
        let falsy : any[] = [ false, '', 0, NaN, null, undefined ];

        // Empty array and empty object are truthy
        let truthy : any[] = [ true, 'a', 1, 548923, [], {} ];

        // this is often used for null/undefined checks
        let myObject : any;
        if (myObject && myObject.myProperty === 'whatever') {
            console.log('"myObject" will be interpreted as a false and therefore "myObject.myProperty" wont be ' +
                'evaluated and we dont get a undefined error.');
        }

        // truthy / falsy values can be made explicit boolean value by the negate operator
        let myFalsy : number = 0;
        let myRealFalse : boolean = !!myFalsy;
    }

}
