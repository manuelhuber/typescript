class OperationsShowcase {
    /**
     * Increment and Decrement numbers
     */
    incrementDecrement() {
        let count = 0;
        ++count;
        count++;
        count--;
        --count;
    }
    /**
     * Swapping variables in a single line
     */
    swapVariables() {
        let foo = 'bar';
        let bar = 'foo';
        [foo, bar] = [bar, foo];
        console.log(foo + bar); // foobar
    }
    /**
     * Boolean expressions with falsy and truthy values
     * You should check the TruthyAndFalsy examples in the basics first!
     */
    booleanExpressions(maybeUndefined) {
        // For equal checks use triple equals sign
        console.log('1' == 1); // true
        console.log('1' === 1); // false
        console.log('1' !== 1); // true
        // A boolean expression always returns the last member that needed to be evaluated
        console.log(true && 0 && false); // 0
        console.log(false || 'a string' || true); // 'a string'
        console.log(false || '' || true); // true
        let object;
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
    ternaryOperator() {
        let condition = false;
        let valueIfTrue = 1;
        let valueIfFalse = 2;
        // Ternary operator syntax
        let myNumber = condition ?
            valueIfTrue :
            valueIfFalse;
        // same as
        if (condition) {
            myNumber = valueIfTrue;
        }
        else
            myNumber = valueIfFalse;
    }
    /**
     * while, do while
     */
    whileLoops() {
        let c = 10;
        while (c > 0) {
            console.log(c--);
        }
        c = 10;
        do {
            console.log(c--);
        } while (c > 0);
    }
    /**
     * for loops, iterate over arrays
     */
    forLoops() {
        for (let i = 10; i > 0; i++) {
            console.log(i);
        }
        let someArray = [1, "string", false];
        for (let entry of someArray) {
            console.log(entry); // 1, "string", false
        }
    }
    /**
     * Switch statement
     */
    switchStatement(dmg) {
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
