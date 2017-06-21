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
        count++;
        ++count;
        const pi : number = 3.14;
        let myHex : number = 0xf00d;
        let mySum : number = count + pi;
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

        // Maps
        let myMap : { [key : string] : number } = {};
        let myKey = 'foobar';
        myMap[ myKey ] = 42;
        myMap[ 'string literal' ] = 100;
        // ES6 Syntax - not available when compiling to ES5
        // let myMap : Map<string, number> = new Map<string,number>();
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


    /**
     * Access me with this.addFucntion
     * @param x the first number
     * @param y the second number
     * @return {number} the sum of the given numbers
     */
    public addFunction(x : number, y : number) : number {
        return x + y;
    }

}
