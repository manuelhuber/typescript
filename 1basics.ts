import { MyInterface } from './classes';
export class Basics {

    private classLevelProperty : string = 'Access me with "this.classLevelProperty"';

    public basicTypes() : void {
        // For variables, use keyword "let" or "const"
        let myString : string = 'Something';
        myString = 'something else';

        let truth : boolean = true;

        // numbers for ALL types of numbers
        let count : number = 1;
        const pi : number = 3.14;
        let myHex : number = 0xf00d;
        let mySum : number = count + pi;

        // the default value in JS (and therefore TS) for everything without a value
        let myOtherValue : any = undefined;
        console.log(myOtherValue.someProperty); // undefined error
        let myValue : any = null;
    }

    public moreBasicTypes() : void {
        // Arrays
        let myArray : number[] = [ 1, 2, 3 ];

        // Touples
        let myTouple : [ string, number ] = [ "John", 24 ];
        console.log(myTouple[ 0 ]); // prints the first value
        console.log(myTouple[ 1 ]); // prints the second value

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
        let myFancyObject : MyInterface = {
            someProperty: 'with a value',
            aSecondProperty: false,
            multiplyFunction: (a : number, b : number) => a * b
        };
        let result = myFancyObject.multiplyFunction(2, 3);
    }

    public maps() {
        let myMap : { [key : string] : number } = {};
        let myKey = 'foobar';
        myMap[ myKey ] = 42;
        myMap[ 'string literal' ] = 100;
        // ES6 Syntax - not available when compiling to ES5
        // let myMap : Map<string, number> = new Map<string,number>();
    }

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
