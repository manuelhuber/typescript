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
        let a : any = '1';
        // For equal checks use triple equals sign
        console.log(a == 1); // true
        console.log(a === 1); // false
        console.log(a !== 1); // true

        // A boolean expression always returns the last member that needed to be evaluated
        console.log(true && 0 && false); // 0
        console.log(false || 'a string' || true); // 'a string'
        console.log(false || '' || true); // true

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
        let myNumber = condition ?
            valueIfTrue :
            valueIfFalse;

        // same as

        if (condition) {
            myNumber = valueIfTrue;
        } else myNumber = valueIfFalse;

    }

    /**
     * while, do while
     */
    public whileLoops() : void {
        let c : number = 10;
        while (c > 0) {
            console.log(c--);
        }

        do {
            console.log(c++);
        } while (c < 10)

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
