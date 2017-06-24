class Functions {

    /**
     * Named functions, anonymous functions, arrow syntax, immediately executing functions
     */
    public functionSyntax() : void {
        // Without typing for now

        // Named function
        function otherFunction(a, b) {
            return a + b;
        }

        // Anonymous function asigned to a variable
        const myFunction = function (a, b) {
            return a + b;
        };

        // arrow syntax
        const myLambda = (a, b) => a + b;

        // arrow syntax with body
        const myLambdaWithBody = (a, b) => {
            return a + b;
        };

        // all of the above can the called in the same way
        console.log(myFunction(1, 2));
        console.log(myLambda(1, 2));
        console.log(myLambdaWithBody(1, 2));
        console.log(otherFunction(1, 2));

        // immediatly invoking function
        (function (a) {
            console.log(a);
        })('foo');

        // also with arrow syntax
        (a => console.log(a))('bar');
    }

    /**
     * Typing parameters and return values
     */
    public functionTyping() : void {

        // The variable "myAddFullyTyped" is typed and the value ( = the function) is also fully typed
        const myAddFullyTyped : (baseValue : number, increment : number) => number =
            (x : number, y : number) : number => x + y;

        // The compiler knows the types of x & y based on the typing of "myAdd"
        const myAdd : (baseValue : number, increment : number) => number = (x, y) => x + y;

        // The compiler knows the type of "myAdd2" based on the typing of it's value
        const myAdd2 = (x : number, y : number) : number => x + y;

        // let foo : string = myAdd2(1, 2); <- error, since the compiler knows myAdd2 will return a number
    }

    /**
     * Function acception variable amount of parameters
     */
    public unknownNumberOfParameters() : void {
        const fullName = (doctor : boolean, firstName : string, ...lastNames : string[]) =>
            doctor ? 'Dr. ' : '' + firstName + ' ' + lastNames.join(' ');
        console.log(fullName(false, "John", "Doe", "Springer", "Smith")); // "John Doe Springer Smith"
        console.log(fullName(true, "Doom")); // "Dr. Doom"
    }

    /**
     * optional parameters, default values
     */
    public parameterOptions() : void {
        // Optional parameters are marked with "?"
        const sayHello = (name? : string) : void => {
            if (name) {
                console.log('Hello ' + name);
            } else {
                console.log('Howdy Stranger!');
            }
        };

        // Both valid
        console.log(sayHello("John")); // Hello John
        console.log(sayHello()); // Howdy Stranger

        // Default values can be specified in the parameters of a function
        const increment = (base : number, increment : number = 1) : number => base + increment;

        console.log(increment(3)); // 4
        console.log(increment(3, 2)); // 5
    }

    /**
     * Generators, lazy iterators
     * Careful: only available with ES6!
     */
    public lazyIterators() : void {

        // The star marks a generator
        function* fib(max? : number) : IterableIterator<number> {
            let a : number = 0, b = 1;
            while (!max || a + b < max) {
                // generators use the yield keyword
                yield a + b;
                [ a, b ] = [ b, a + b ];
            }
        }

        let fibNumbers = fib();
        // The return value is a object with a "value" and a "done" property
        console.log(fibNumbers.next()); // {value: 1, done: false}
        console.log(fibNumbers.next()); // {value: 2, done: false}
        console.log(fibNumbers.next()); // {value: 3, done: false}
        console.log(fibNumbers.next()); // {value: 5, done: false}
        console.log(fibNumbers.next()); // {value: 8, done: false}
        console.log(fibNumbers.next()); // {value: 13, done: false}

        // Combine all results into a array
        console.log(Array.from(fib(100))); // [1, 2, 3, 5, 8, 13, 21, 34, 55, 89]

        // Iterate over all results
        for (let num of fib(100)) {
            console.log(num); // 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
        }

        let iterator = this.iteratorWithLimit(10);
        console.log(iterator.next()); // {value: 10, done: false}
        console.log(iterator.next()); // {value: 11, done: false}
        console.log(iterator.next()); // {value: undefined, done: true}
    }

    /**
     * Class level iterator with a limit
     */
    public *iteratorWithLimit(count : number) : IterableIterator<number> {
        while (count < 12) {
            yield count++;
        }
    }
}


