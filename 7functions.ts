class Functions {

    public functionSyntax() : void {
        // Without typing for now

        const myFunction = function (a, b) {
            return a + b;
        };

        const myLambda = (a, b) => a + b;

        const myLambdaWithBody = (a, b) => {
            return a + b;
        }
    }

    public functionTyping() : void {

        // The variable "myAddFullyTyped" is typed and the value ( = the function) is also typed
        const myAddFullyTyped : (baseValue : number, increment : number) => number =
            (x : number, y : number) : number => x + y;

        // The compiler knows the types of x & y based on the typing of "myAdd"
        const myAdd : (baseValue : number, increment : number) => number = (x, y) => x + y;

        // The compiler knows the type of "myAdd2" based on the typing of it's value
        const myAdd2 = (x : number, y : number) : number => x + y;

        // let foo : string = myAdd2(1, 2); <- error, since the compiler knows myAdd2 will return a number
    }

    public unknownNumberOfParameters() : void {
        const fullName = (doctor : boolean, firstName : string, ...lastNames : string[]) =>
            doctor ? 'Dr. ' : '' + firstName + ' ' + lastNames.join(' ');
        let myName = fullName(false, "John", "Doe", "Springer", "Smith"); // John Doe Springer Smith
        let myAlias = fullName(true, "Doom"); // Dr. Doom
    }

    public optionalParameters() : void {

        // Optional parameters are marked with "?"
        const sayHello = (name? : string) : void => {
            if (name) {
                console.log('Hello ' + name);
            } else {
                console.log('Howdy Stranger!');
            }
        };

        // Both valid
        console.log(sayHello("John"));
        console.log(sayHello());

        // Default values can be specified in the parameters of a function
        const increment = (base : number, increment : number = 1) : number => base + increment;

        console.log(increment(3)); // 4
        console.log(increment(3, 2)); // 5
    }

    public lazyIterators() : void {
        function* idMaker() {
            let index = 0;
            while (index < 3)
                yield index++;
        }

        let gen = idMaker();

        console.log(gen.next()); // { value: 0, done: false }
        console.log(gen.next()); // { value: 1, done: false }
        console.log(gen.next()); // { value: 2, done: false }
        console.log(gen.next()); // { value: undefined, done: true }

        let iterator = this.lazy(10);

    }

    public *lazy(count : number) : IterableIterator<number> {
        while (true) {
            yield count++;
        }
    }
}


