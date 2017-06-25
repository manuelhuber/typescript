class Functions {
    /**
     * Named functions, anonymous functions, arrow syntax, immediately executing functions
     */
    functionSyntax() {
        // Without typing for now
        // Named function
        function namedFunction(a, b) {
            return a + b;
        }

        // Anonymous function asigned to a variable
        const anonymousFunction = function (a, b) {
            return a + b;
        };
        // arrow syntax
        const arrowSyntax = (a, b) => a + b;
        // arrow syntax with body
        const ArrowSyntaxWithBody = (a, b) => {
            return a + b;
        };
        // all of the above can the called in the same way
        console.log(namedFunction(1, 2));
        console.log(anonymousFunction(1, 2));
        console.log(arrowSyntax(1, 2));
        console.log(ArrowSyntaxWithBody(1, 2));
        // immediately invoking function
        (function (a) {
            console.log(a);
        })('foo');
        // also with arrow syntax
        (a => console.log(a))('bar');
    }

    /**
     * Typing parameters and return values
     */
    functionTyping() {
        // The variable "myAddFullyTyped" is typed and the value ( = the function) is also fully typed
        const myAddFullyTyped = (x, y) => x + y;
        // The compiler knows the types of x & y based on the typing of "myAdd"
        const myAdd = (x, y) => x + y;
        // The compiler knows the type of "myAdd2" based on the typing of it's value
        const myAdd2 = (x, y) => x + y;
        // let foo : string = myAdd2(1, 2); <- error, since the compiler knows myAdd2 will return a number
    }

    /**
     * Function acception variable amount of parameters
     */
    unknownNumberOfParameters() {
        const fullName = (doctor, firstName, ...lastNames) => doctor ? 'Dr. ' : '' + firstName + ' ' + lastNames.join(' ');
        fullName(false, "John", "Doe", "Springer", "Smith"); // "John Doe Springer Smith"
        fullName(true, "Doom"); // "Dr. Doom"
    }

    /**
     * optional parameters, default values
     */
    parameterOptions() {
        // Optional parameters are marked with "?"
        const greeting = (name) => {
            return 'Hello ' + name ? name : 'stranger';
        };
        console.log(greeting('John')); // Hello John
        console.log(greeting()); // Hello stranger
        // Optional parameter can have a default value defined
        const increment = (base, increment = 1) => base + increment;
        console.log(increment(3)); // 4
        console.log(increment(3, 2)); // 5
    }

    /**
     * Generators, lazy iterators
     * Careful: only available with ES6!
     */
    lazyIterators() {
        // The star marks a generator
        function* fib(max) {
            let a = 0, b = 1;
            while (!max || a <= max) {
                // generators use the yield keyword
                yield a;
                [a, b] = [b, a + b];
            }
        }

        let fibNumbers = fib();
        // The return value is a object with a "value" and a "done" property
        console.log(fibNumbers.next()); // {value: 0, done: false}
        console.log(fibNumbers.next()); // {value: 1, done: false}
        console.log(fibNumbers.next()); // {value: 1, done: false}
        console.log(fibNumbers.next()); // {value: 2, done: false}
        console.log(fibNumbers.next()); // {value: 3, done: false}
        console.log(fibNumbers.next()); // {value: 5, done: false}
        console.log(fibNumbers.next()); // {value: 8, done: false}
        console.log(fibNumbers.next()); // {value: 13, done: false}
        // Combine all results into a array
        console.log(Array.from(fib(100))); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
        // Iterate over all results
        for (let num of fib(100)) {
            console.log(num); // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
        }
        function* lazy12(n) {
            while (n < 12) {
                yield n++;
            }
        }

        let iterator = lazy12(10);
        console.log(iterator.next()); // {value: 10, done: false}
        console.log(iterator.next()); // {value: 11, done: false}
        console.log(iterator.next()); // {value: undefined, done: true}
    }

    /**
     * Class level iterator with a limit
     */
    *iteratorWithLimit(count) {
        while (count < 12) {
            yield count++;
        }
    }
}
