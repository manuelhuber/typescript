var OperationsShowcase = (function () {
    function OperationsShowcase() {
    }
    /**
     * Increment and Decrement numbers
     */
    OperationsShowcase.prototype.incrementDecrement = function () {
        var count = 0;
        ++count;
        count++;
        count--;
        --count;
    };
    /**
     * Swapping variables in a single line
     */
    OperationsShowcase.prototype.swapVariables = function () {
        var foo = 'bar';
        var bar = 'foo';
        _a = [bar, foo], foo = _a[0], bar = _a[1];
        console.log(foo + bar); // foobar
        var _a;
    };
    /**
     * Boolean expressions with falsy and truthy values
     * You should check the TruthyAndFalsy examples in the basics first!
     */
    OperationsShowcase.prototype.booleanExpressions = function (maybeUndefined) {
        // For equal checks use triple equals sign
        console.log('a' === 'a');
        console.log('a' !== 'a');
        // A boolean expression always returns the last member that needed to be evaluated
        console.log(true && 0 && false); // the expression is only evaluated until the 0 => 0 is be logged
        console.log(false || 'a string' || true); // the expression is only evaluated until the string => 'a string' is be logged
        console.log(false || '' || true); // empty string is falsy, so the entire expression is evaluated => true is logged
        var object;
        console.log(object && object.myProperty); // 'undefined'
        object = {
            myProperty: 'my string'
        };
        console.log(object && object.myProperty); // 'my string'
        console.log(!!(object && object.myProperty)); // true
        console.log(maybeUndefined || 'alternative value'); // logs the value of maybeUndefined if available or 'alternative value' otherwise
    };
    /**
     * Short version of if-else
     */
    OperationsShowcase.prototype.ternaryOperator = function () {
        var condition = false;
        var valueIfTrue = 1;
        var valueIfFalse = 2;
        // Ternary operator syntax
        var myNumber = condition ? valueIfTrue : valueIfFalse;
        // same as
        var myOtherNumber;
        if (condition) {
            myOtherNumber = valueIfTrue;
        }
        else {
            myOtherNumber = valueIfFalse;
        }
    };
    /**
     * while, do while
     */
    OperationsShowcase.prototype.whileLoops = function () {
        var c = 10;
        while (c > 0) {
            console.log(c--);
        }
        c = 10;
        do {
            console.log(c--);
        } while (c > 0);
    };
    /**
     * for loops, iterate over arrays
     */
    OperationsShowcase.prototype.forLoops = function () {
        for (var i = 10; i > 0; i++) {
            console.log(i);
        }
        var someArray = [1, "string", false];
        for (var _i = 0, someArray_1 = someArray; _i < someArray_1.length; _i++) {
            var entry = someArray_1[_i];
            console.log(entry); // 1, "string", false
        }
    };
    /**
     * Switch statement
     */
    OperationsShowcase.prototype.switchStatement = function (dmg) {
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
    };
    return OperationsShowcase;
}());
