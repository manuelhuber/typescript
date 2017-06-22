class OperationsShowcase {

    /**
     * Increment and Decrement numbers
     */
    public incrementDecrement() : void {
        let count : number = 0;
        ++count;
        count++;
        count--;
        --count;
    }

    /**
     * Swapping variables in a single line
     */
    public swapVariables() : void {
        let foo : string = 'bar';
        let bar : string = 'foo';
        [ foo, bar ] = [ bar, foo ];
        console.log(foo + bar); // foobar
    }

    /**
     * Boolean expressions with falsy and truthy values
     * You should check the TruthyAndFalsy examples in the basics first!
     */
    public booleanExpressions(maybeUndefined : string) : void {
        // For equal checks use triple equals sign
        console.log('a' === 'a');
        console.log('a' !== 'a');

        // A boolean expression always returns the last member that needed to be evaluated
        console.log(true && 0 && false); // the expression is only evaluated until the 0 => 0 is be logged
        console.log(false || 'a string' || true); // the expression is only evaluated until the string => 'a string' is be logged
        console.log(false || '' || true); // empty string is falsy, so the entire expression is evaluated => true is logged

        let object : any;
        console.log(object && object.myProperty); // 'undefined'

        object = {
            myProperty: 'my string'
        };
        console.log(object && object.myProperty); // 'my string'

        console.log(!!(object && object.myProperty)); // true

        console.log(maybeUndefined || 'alternative value'); // logs the value of maybeUndefined if available or 'alternative value' otherwise
    }

    /**
     * Short version of if-else
     */
    public ternaryOperator() : void {
        let condition : boolean = false;
        let valueIfTrue : number = 1;
        let valueIfFalse : number = 2;

        // Ternary operator syntax
        let myNumber = condition ? valueIfTrue : valueIfFalse;

        // same as
        let myOtherNumber;
        if (condition) {
            myOtherNumber = valueIfTrue;
        } else {
            myOtherNumber = valueIfFalse;
        }
    }

    /**
     * while, do while
     */
    public whileLoops() : void {
        let c : number = 10;
        while (c > 0) {
            console.log(c--);
        }

        c = 10;
        do {
            console.log(c--);
        } while (c > 0)

    }

    /**
     * for loops, iterate over arrays
     */
    public forLoops() : void {

        for (let i : number = 10; i > 0; i++) {
            console.log(i);
        }

        let someArray = [ 1, "string", false ];

        for (let entry of someArray) {
            console.log(entry); // 1, "string", false
        }
    }

    /**
     * Switch statement
     */
    public switchStatement(dmg : number) : void {
        switch (dmg) {
            case 0:
                console.log('Its but a scratch');
                break;
            case 1:
                console.log('Just a flesh wound');
                break;
            case 2:
                console.log('Lets call it a draw');
                break;
            default:
                console.log('Im invincible!');
                break;
        }
    }
}
